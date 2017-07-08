(function() {

  //=require 'lib/*'
  //=require 'pages/*'

  const rootElement = document.querySelector('#root');

  rootElement.innerHTML = templates['step1']();

  page('/step1', step1);
  page('/step2', step2);
  page('/step3', step3);
  page('/step4', step4);
  page('/final', final);
  page('*', notfound);
  page();

})();
