(function ($) {
  $(function () {

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

    async function testAsync(){
      return '함수를 async로 선언하면 Promise객체를 return한다'
    }
    console.log(testAsync())

    // Awaiting a promise to be fulfilled
    function resolveAfter2Seconds (x) {
      // return x
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('Awaiting a promise to be fulfilled')
          resolve(x)
        }, 2000)
      })
    }
    async function f1 () {
      let x = await resolveAfter2Seconds(10)
      console.log(`await resolveAfter2Seconds(10): ${x}`)
    }
    f1()
    // Thenable objects
    async function f2 () {
      const thenable = {
        then: (resolve, _reject) => {
          console.log('Thenable objects')
          resolve('resolved!')
        }
      }
      console.log(await thenable)
    }
    f2()
    // Conversion to promise
    async function f3 () {
      let y = await 20
      console.log(`Conversion to promise: ${y}`)
      console.log(`typeof y: ${typeof y}`)
    }
    f3()
    // Promise rejection
    async function f4 () {
      try {
        let z = await Promise.reject(30)
        console.log('Promise rejection')
        console.log(`await Promise.reject(30): ${z}`)
      } catch (e) {
        console.error('e: ', e)
      }
    }
    f4()
    // Handling rejected promises
    // let response = await promisedFunction().catch((err) => { console.err('err: ', err) })
    // Top level await
    const colors = fetch('opt/custom.json')
      .then(response => 
        {
          console.log('response: ', response)
          console.log('response.json(): ', response.json())
        }
      )
    // export default await colors

    async function asyncCall () {
      console.log('calling')
      const result = await resolveAfter2Seconds('asyncCall')
      console.log(`await resolveAfter2Seconds('asyncCall'): ${result}`)
    }
    asyncCall()

    // For example, the following:
    async function fooA () {
      console.log('For example, the following:')
      return 1
    }
    // ...is equivalent to:
    function fooP () {
      console.log('...is equivalent to:')
      return Promise.resolve(1)
    }
    console.log(`fooA: ${fooA()}`)
    console.log(`fooP: ${fooP()}`)
    // For example:
    async function fooAA () {
      console.log('For example:')
      await 1
    }
    function fooAP () {
      return Promise.resolve(1).then(() => undefined)
    }
    console.log(`fooAA: ${fooAA()}`)
    console.log(`fooAP: ${fooAP()}`)
    async function bar () {
      console.log('-start bar-')
      const result1 = await new Promise((resolve) => setTimeout(() => resolve('1')))
      const result2 = await new Promise((resolve) => setTimeout(() => resolve('2')))
    }
    bar()
    console.log('-end bar-')
    async function bar2 () {
      console.log('-start bar2-')
      const p1 = new Promise((resolve) => setTimeout(() => resolve('1'), 1000))
      const p2 = new Promise((_, reject) => setTimeout(() => reject('2'), 500))
      const results = [
        await p1,
        await p2,
      ]
    }
    bar2().catch((e) => {
      console.log('bar2().catch() error: ', e)
      console.log('-end bar2-')
    })
    function resolveAfter2Sec () {
      console.log('starting slow promise')
      return new Promise(resolve => {
        setTimeout(function () {
          resolve('slow')
          console.log('slow promise is done')
        }, 2000)
      })
    }
    function resolveAfter1Sec () {
      console.log('starting fast promise')
      return new Promise(resolve => {
        setTimeout(function () {
          resolve('fast')
          console.log('fast promise is done')
        }, 1000)
      })
    }
    async function sequentialStart () {
      console.log('sequentialStart')

      // 1. Execution gets here almost instantly
      const slow = await resolveAfter2Sec()
      console.log(`slow: ${slow}`) // 2. this runs 2 seconds after 1.

      const fast = await resolveAfter1Sec()
      console.log(`fast: ${fast}`) // 3. this runs 3 seconds after 1.
    }
    async function concurrentStart () {
      console.log('concurrentStart with await')
      const slow = resolveAfter2Sec() // starts timer immediately
      const fast = resolveAfter1Sec() // starts timer immediately

      // 1. Execution gets here almost instantly
      console.log(`await slow: ${await slow}`) // 2. this runs 2 seconds after 1.
      console.log(`await fast: ${await fast}`) // 2. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
    }
    function concurrentPromise () {
      console.log('concurrentPromise start with Promise.all')
      return Promise.all([
        resolveAfter2Sec(),
        resolveAfter1Sec()
      ]).then(messages => {
        console.log(`messages[0]: ${messages[0]}`) // slow
        console.log(`messages[1]: ${messages[1]}`) // fast
      })
    }
    async function parallel () {
      console.log('parallel with await Promise.all')
      // Start 2 'jobs' in parallel and wait for both of them to complete
      await Promise.all([
        (async () => console.log(`await resolveAfter2Sec(): ${await resolveAfter2Sec()}`))(),
        (async () => console.log(`await resolveAfter1Sec(): ${await resolveAfter1Sec()}`))()
      ])
    }
    sequentialStart() // after 2 seconds, logs 'slow', then after 1 more second, 'fast'
    // wait above to finish
    setTimeout(concurrentStart, 4000) // after 2 seconds, logs 'slow' and then 'fast'
    // wait again
    setTimeout(concurrentPromise, 7000) // same as concurrentStart
    // wait again
    setTimeout(parallel, 10000) // truly parallel: after 1 second, logs 'fast', then after 1 more second, 'slow'
  })
}(jQuery))
