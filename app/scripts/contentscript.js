'use strict';

var regex = /^(\$|\#)/

$('pre').each(function(i, a_pre_dom){
  // console.log(a_pre_dom)

  // 複数行ある場合の対応
  var cmds_with_prompts = a_pre_dom.textContent.split('\n') 

  // 空文字削除
  cmds_with_prompts = $.grep(cmds_with_prompts, function(e){return e;})

  var cmd_with_prompt_with_button = ['<pre>']
  $.each(cmds_with_prompts, function(i, cmd_with_prompt){

    if ( cmd_with_prompt.match(regex) ) {
      var prompt = cmd_with_prompt.charAt(0)
      var cmd = cmd_with_prompt.replace(regex, '')
                               .replace(/^\s/, '')
      var button_dom = $('<button>', {
        'data-clipboard-text': cmd,
        'class': 'cmd_to_clipboard_btn',
      }).text('copy')
      cmd_with_prompt_with_button.push(prompt + ' ' + cmd)
      cmd_with_prompt_with_button.push(' ' + button_dom[0].outerHTML + "\n")
      console.log(cmd_with_prompt_with_button.join(''))
    }
  })
  cmd_with_prompt_with_button.push('</pre>')
  $(this).replaceWith(cmd_with_prompt_with_button.join(''))
})


var clipboard = new Clipboard('.cmd_to_clipboard_btn');
clipboard.on('success', function(e) {
//成功時の処理
});
clipboard.on('error', function(e) {
//失敗時の処理
});
