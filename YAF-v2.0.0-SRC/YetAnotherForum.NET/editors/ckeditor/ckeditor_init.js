function CKEditor_Load() {
       if (arguments.callee.done) return;

       arguments.callee.done = true;
	   
	   
	   CKEDITOR.replaceAll(function( textarea, config ){

		  config.disableNativeSpellChecker = false;
		  config.scayt_autoStartup = true; 
		  
	      config.extraPlugins = 'bbcodehtml,syntaxhighlight,bbcodeselector';
	      //config.toolbar = [                                 
		  //                       ['Cut', 'Copy', 'Paste'], ['Undo', 'Redo', '-', 'Find', 'Replace', '-', 'SelectAll', 'RemoveFormat'],
		  //  					 ['-', 'NumberedList', 'BulletedList'],
		  //  					 ['-', 'Link', 'Unlink', 'Image', 'Flash'],
          //                       ['Source'],
          //                       ['Maximize'],
		  //                       ['Blockquote', 'syntaxhighlight', 'bbcodeselector'],
		  //                       ['SelectAll', 'RemoveFormat'],
		  //  					 ['About'],
		  //  					 '/',
		  //  					 ['Bold', 'Italic', 'Underline', '-', 'TextColor', 'Font', 'FontSize'],
		  //  					 ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'PasteText','PasteFromWord'],
		  //                       ['Outdent', 'Indent'],
		  //  					 ['Scayt']
		  //  					] ;
								
			config.entities_greek = false;
			config.entities_latin = false;
			config.language = 'zh-cn';
			
			config.contentsCss = 'editors/ckeditor/contents.css';

			config.filebrowserBrowseUrl = 'editors/ckfinder/ckfinder.html'; 
			config.filebrowserImageBrowseUrl = 'editors/ckfinder/ckfinder.html?Type=Images'; 
			config.filebrowserFlashBrowseUrl = 'editors/ckfinder/ckfinder.html?Type=Flash';  
			config.filebrowserUploadUrl = 'editors/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Files'; 
			config.filebrowserImageUploadUrl = 'editors/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Images'; 
			config.filebrowserFlashUploadUrl = 'editors/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Flash'; 

		  });
};
   
   if (document.addEventListener) {
       document.addEventListener("DOMContentLoaded", CKEditor_Load, false);
   }

window.onload = CKEditor_Load;