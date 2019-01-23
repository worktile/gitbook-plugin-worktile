require(["gitbook", "jQuery"], function (gitbook, $) {
  gitbook.events.bind("page.change", function () {
    // $(".gitbook-link").hide();
    $(".body-inner").append('<div style="text-align: center; padding: 25px; color: rgba(160, 160, 160, 1);">' + icp + '</div>');
    insertLogo(src, style, link)
  });
  var icp = '© Worktile 2018 | 京ICP备13017353号-3';
  var src = ''
  var style = ''
  var link = ''
  gitbook.events.bind('start', function (e, config) {
    src = config['worktile']['src']
    style = config['worktile']['style']
    link = config['worktile']['link']
    link = config['worktile']['link']
    icp = config['worktile']['icp']
  })

  var insertLogo = function (src, style, link) {
    $('ul.summary').children().eq(0).before('<a class="book-logo" target="_blank" href="' + link + '"><img src="' + src + '" style="' + style + '"></a>')
  }

});
