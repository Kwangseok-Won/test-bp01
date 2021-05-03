(function ($) {
  $(function () {

    let myTextarea = $('textarea')[0]
    let myCodeMirror = CodeMirror.fromTextArea(myTextarea, {
      lineNumbers: true
    })

    // var selObj = window.getSelection()
    // let range = selObj.getRangeAt(0)

    axios.get('opt/custom.json', {
      params: {
        a: 'a'
      }
    })
      .then(function (response) {
        // console.log('response: ', response)
      })
      .catch(function (error) {
        console.log('error: ', error)
      })
      .then(function () {
        // always executed
      })

    // function ajax () {
    // }

    // let openWin
    // openWin = window.open('about:blank', 'childForm')
    // openWin.document.body.innerHTML = 'hello'
    // console.log('openWin.document.body: ', openWin.document.body)

    window.HELP_IMPROVE_VIDEOJS = false
  })
}(jQuery))
