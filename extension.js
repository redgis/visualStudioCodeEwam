// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');
var axios = require('axios');
var fs = require('fs');

const EXTENSION = '.js';


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed


function openClass(name) {
    /*var editor = vscode.window.activeTextEditor;
    if (!editor) {
        return; // No open text editor
    }*/
    var config = vscode.workspace.getConfiguration('ewam');
    axios.get(config.url + '/api/rest/classOrModule/' + name)
        .then(function (response) {
            vscode.window.setStatusBarMessage('eWam Parsing Ok');
            /* editor.edit(editBuilder => { 
                 
                 editBuilder.replace(editor.selection, response.data.content);
             
                 }
             );*/

            console.log(vscode.workspace.rootPath);
            var fileName = vscode.workspace.rootPath + '\\' + name + EXTENSION;

            fs.writeFile(fileName, response.data.content, function (err) {

                if (err) throw err;
                //var uploadingStatus = vscode.window.setStatusBarMessage("Class imported " + fileName);
                
                var configDocument = vscode.workspace.openTextDocument(fileName);
                configDocument.then(function (document) {
                    vscode.window.showTextDocument(document);
                });
                const spawn = require('child_process').spawn;
                const ls = spawn('git', ['add', fileName], { cwd: vscode.workspace.rootPath, env: process.env });

                ls.stdout.on('data', (data) => {
                    console.log(`stdout: ${data}`);
                });


            });

        })
        .catch(function (response) {
            console.log(response);
        });

}

function GenericPostOperation(name, op) {

    var config = vscode.workspace.getConfiguration('ewam');
    axios.post(config.url + '/api/rest/classOrModule/' + name + '/' + op)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (response) {
            console.log(response);
        });
}

function checkInClass(name) {
    /*var editor = vscode.window.activeTextEditor;
    if (!editor) {
        return; // No open text editor
    }*/
    var config = vscode.workspace.getConfiguration('ewam');

    axios.post(config.url + '/api/rest/classOrModule/' + name + '/checkIn')
        .then(function (response) {

            console.log(vscode.workspace.rootPath);
            var fileName = vscode.workspace.rootPath + '\\' + name + EXTENSION;

            const spawn = require('child_process').spawn;
            const ls = spawn('git', ['commit', fileName, '-m', '"Message"'],
                { cwd: vscode.workspace.rootPath, env: process.env });

            ls.stdout.on('data', (data) => {
                console.log(`stdout: ${data}`);
            });

        })
        .catch(function (response) {
            console.log(response);
        });

}

function getOpenClassName() {
    var editor = vscode.window.activeTextEditor;

    if (!editor) {
        // return; // No open text editor
    } else {
        var fpath = editor.document.fileName.replace(/^.*[\\\/]/, '');
        return fpath.substring(fpath.lastIndexOf('/') + 1, fpath.lastIndexOf('.'));
    }

}

function parse() {
    var editor = vscode.window.activeTextEditor;
    var className = getOpenClassName();
    var config = vscode.workspace.getConfiguration('ewam');

    if (!editor) {
        // return; // No open text editor
    } else {
        var body = editor.document.getText();
        axios.post(config.url + '/api/rest/classOrModule/' + className + '/parse',
            { 
              name:className,
              ancestor:'tt',
              content: body
             })
            .then(function (response) {
                
                editor.edit(
                    editBuilder => 
                    { 
                         var start = new vscode.Position(0, 0);
                        var lastLine = vscode.window.activeTextEditor.document.lineCount - 1;
                        var end = vscode.window.activeTextEditor.document.lineAt(lastLine).range.end;

                        var range = new vscode.Range(start, end);
                        
                        editBuilder.replace(range, response.data.content)
                    }
                    );
                console.log(response);
            })
            .catch(function (response) {
                console.log(response);
            });

    }

}


function getScenario(classname, callBack) {
    var config = vscode.workspace.getConfiguration('ewam');
    axios.get(config.url + '/api/rest/classOrModule/' + classname + '/scenarios')
        .then(function (response) {
            vscode.window.showQuickPick(response.data)
                .then((selection) => {
                    callBack(classname, selection)
                });
        })
        .catch(function (response) {
            console.log(response);
        });
}

function editScenario(classname, scenarioName) {

    var config = vscode.workspace.getConfiguration('ewam');
    axios.get(config.url + '/api/rest/classOrModule/' + classname + '/scenarios/' + scenarioName)
        .then(function (response) {

        })
        .catch(function (response) {
            console.log(response);
        });
}

/**
 * Search for a class	
		 *
		 * @param criteria string The message to show.
		 * @return the class name selected.
		 * when the message was dismissed.
		 */
function searchClass(callBackFunc) {

    var config = vscode.workspace.getConfiguration('ewam');

    vscode.window.showInputBox({ prompt: 'Class name or criteria', value: '' })
        .then(criteria => {
            axios.get(config.url + '/api/rest/searchEntities',
                {
                    params: {
                        q: criteria
                    }
                })
                .then(function (response) {
                    console.log(response);
                    vscode.window.showQuickPick(response.data)
                        .then((selection) => {
                            callBackFunc(selection.label)
                        });
                })
                .catch(function (response) {
                    console.log(response);
                });
        }
            );
}


function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('"ewamvscadaptor" is now active');

    var myOutputChannel = vscode.window.createOutputChannel('eWam');
    myOutputChannel.append('eWam plugin started');

    if (!vscode.workspace.rootPath) {
        vscode.window.showErrorMessage("eWam plugin: Cannot work without opened folder");
        return;
    }

    var name = '';
    var disposable = vscode.commands.registerCommand('ewam.openEntity', function () {
        name = searchClass(openClass);
    });
    context.subscriptions.push(disposable);

    disposable = vscode.commands.registerCommand('ewam.checkIn', function () {
        name = checkInClass(getOpenClassName());
    });
    context.subscriptions.push(disposable);

    disposable = vscode.commands.registerCommand('ewam.checkOut', function () {
        GenericPostOperation(getOpenClassName(), 'checkOut');
    });
    context.subscriptions.push(disposable);

    disposable = vscode.commands.registerCommand('ewam.parse', function () {
        parse();
    });
    context.subscriptions.push(disposable);

    disposable = vscode.commands.registerCommand('ewam.reimplem', function () {
        GenericPostOperation(getOpenClassName(), 'ManageReimplem');
    });
    context.subscriptions.push(disposable);



    disposable = vscode.commands.registerCommand('ewam.scenario', function () {
        getScenario(getOpenClassName(), editScenario);
    });
    context.subscriptions.push(disposable);
    
    //disposable = vscode.window.setStatusBarMessage('Ready');
    //context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;