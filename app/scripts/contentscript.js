'use strict';

var regex = /^(\$|\#)/

$('pre').each(function(i, $cmd_with_prompt){
  console.log($cmd_with_prompt)

  // 複数行ある場合の対応
  var cmds_with_prompt = $cmd_with_prompt.textContent.split('\n') 

  // 空文字削除
  var cmds_with_prompts = $.grep(cmds_with_prompt, function(e){return e;})

  $.each(cmds_with_prompts, function(i, cmd_with_prompt){
    if ( cmd_with_prompt.match(regex) ) {
      var cmd = cmd_with_prompt.replace(regex, '')
      $('<button>', {
        'data-clipboard-text': cmd,
        'class': 'cmd_to_clipboard_btn',
      }).text('copy').appendTo($cmd_with_prompt)
    }
  })
})


var clipboard = new Clipboard('.cmd_to_clipboard_btn');
clipboard.on('success', function(e) {
//成功時の処理
});
clipboard.on('error', function(e) {
//失敗時の処理
});
