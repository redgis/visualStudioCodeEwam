// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');
var axios = require('axios');
var fs = require('fs');


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed


function openClass(name) {
    /*var editor = vscode.window.activeTextEditor;
    if (!editor) {
        return; // No open text editor
    }*/
    var config= vscode.workspace.getConfiguration('ewam');
    axios.get(config.url+'/api/rest/classOrModule/' + name)
        .then(function (response) {
          
            /* editor.edit(editBuilder => { 
                 
                 editBuilder.replace(editor.selection, response.data.content);
             
                 }
             );*/
                     
            console.log(vscode.workspace.rootPath);
            var fileName = vscode.workspace.rootPath + '\\' + name + '.gold';

            fs.writeFile(fileName, response.data.content, function (err) {

                if (err) throw err;
                //var uploadingStatus = vscode.window.setStatusBarMessage("Class imported " + fileName);
                
                var configDocument = vscode.workspace.openTextDocument(fileName);
                configDocument.then(function (document) {
                    vscode.window.showTextDocument(document);
                });
               const spawn = require('child_process').spawn;
               const ls = spawn('git', ['add', fileName], {cwd:vscode.workspace.rootPath, env: process.env});
              
                ls.stdout.on('data', (data) => {
                     console.log(`stdout: ${data}`);
                });
                

            });

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
   var config= vscode.workspace.getConfiguration('ewam');

    axios.post(config.url+'/api/rest/classOrModule/'+name+'/checkIn')
        .then(function (response) {
                           
            console.log(vscode.workspace.rootPath);
            var fileName = vscode.workspace.rootPath + '\\' + name + '.gold';
                               
               const spawn = require('child_process').spawn;
               const ls = spawn('git', ['commit', fileName, '-m', '"Message"'],
                {cwd:vscode.workspace.rootPath, env: process.env});
              
                ls.stdout.on('data', (data) => {
                     console.log(`stdout: ${data}`);
                });            
           
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
   var editor = vscode.window.activeTextEditor;
   var name='';
 
   if (!editor) {
       // return; // No open text editor
    } else {
         var fpath=editor.document.fileName.replace(/^.*[\\\/]/, '');
         name = fpath.substring(fpath.lastIndexOf('/')+1, fpath.lastIndexOf('.'));
    }
    var config= vscode.workspace.getConfiguration('ewam');

     vscode.window.showInputBox({ prompt: 'Class name or criteria', value:name  })
            .then(criteria => {    
            axios.get(config.url+'/api/rest/searchEntities',
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
    console.log('Congratulations, your extension "ewamvscadaptor" is now active!');

    var myOutputChannel = vscode.window.createOutputChannel('eWam');
    myOutputChannel.append('eWam plugin started');

    if (!vscode.workspace.rootPath) {
        vscode.window.showErrorMessage("eWam plugin: Cannot work without opened folder");
        return;
    }
    
 
    var disposable = vscode.commands.registerCommand('extension.sayHello', function () {
                var name = searchClass(openClass);
    });
    context.subscriptions.push(disposable);
    
    disposable = vscode.commands.registerCommand('extension.checkIn', function () {
                var name = searchClass(checkInClass);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;