
{
  let context = {}
  window.setContext = function(k, v) {
    context[k] = v
  }
  window.f1 = function f1() {
    console.log(1)
    f2()
  }
  function f2() {
    console.log(2)
    f3()
  }
  function f3() {
    console.log(3)
    f4()
  }
  function f4() {
    console.log(4, context.n)
  }
}

{
  window.setContext('n', 100)
  window.f1()
}
