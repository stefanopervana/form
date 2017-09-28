import Link from 'next/link'
export default () => (
  <div>
  <style jsx>{`
  tr td pre.prettyprint{white-space:pre-wrap;width:auto}

  pre.result{border:1px solid #d6d6d6;background-color:#f1f1f1;width:98%;padding:5px;margin:0;margin-bottom:0;font-size:12px;overflow:auto}

  pre.box{border:1px solid #d6d6d6;background-color:#f1f1f1;width:98%;padding:5px;margin:0;margin-bottom:10px;font-size:12px;overflow:auto}

  ol.linenums{margin-top:0;margin-bottom:0}

  li.L0,li.L1,li.L2,li.L3,li.L5,li.L6,li.L7,li.L8{list-style-type:none}

  li.L1,li.L3,li.L5,li.L7,li.L9{background:#eee}

                      `}</style>

    <div className="body">


<div class=""> <div class="col-md-7 middle-col">
<p>https://www.tutorialspoint.com/reactjs/reactjs_forms.htm</p>
 <h1>ReactJS - Forms</h1>

<p>En este capítulo, aprenderemos cómo utilizar formularios en React. </p> 

<h2>Simple Example</h2>
<p> En el siguiente ejemplo, estableceremos un formulario de entrada con <strong>value = &#123;this. state.data&#125;</strong>. Esto permite actualizar el estado siempre que cambie el valor de entrada. Estamos utilizando el evento <strong>onChange</strong> que observará los cambios de entrada y actualizará el estado en consecuencia.</p>
<p>In this chapter, we will learn how to use forms in React.</p><p>In the following example, we will set an input form with <strong>value = &#123;this.state.data&#125;</strong>. This allows to update the state whenever the input value changes. We are using <strong>onChange</strong> event that will watch the input changes and update the state accordingly.</p>

<h3>App.jsx</h3> 



<pre class="prettyprint notranslate prettyprinted">import React from 'react';

class App extends React.Component &#123;<br></br>
<br></br>
   constructor(props) &#123;<br></br>
      super(props);<br></br>
 <br></br>
      this.state = &#123;<br></br>
         data: 'Initial data...'<br></br>
      &#125;<br></br>
<br></br>
      this.updateState = this.updateState.bind(this);<br></br>
<br></br>
   &#125;;<br></br>
<br></br>
   updateState(e) &#123;<br></br>
      this.setState(&#123;data: e.target.value&#125;);<br></br>
   &#125;<br></br>
<br></br>
   render() &#123;<br></br>
      return (<br></br>
         &lt;div&gt;<br></br>
            &lt;input type = "text" value = &#123;this.state.data&#125; <br></br>
               onChange = &#123;this.updateState&#125; /&gt;<br></br>
            &lt;h4&gt;&#123;this.state.data&#125;&lt;/h4&gt;<br></br>
         &lt;/div&gt;<br></br>
      );<br></br>
   &#125;<br></br>
&#125;<br></br>
<br></br>
export default App;</pre> <h3>main.js</h3> 

<pre class="prettyprint notranslate prettyprinted">import React from 'react';
import ReactDOM from 'react-dom';<br></br>
import App from './App.jsx';<br></br>
<br></br>
ReactDOM.render(&lt;App/&gt;, document.getElementById('app'));</pre>


<h2>Complex Example</h2>
<p>Cuando el valor de texto de entrada cambia, el estado se actualizará. </p>
<p>When the input text value changes, the state will be updated.</p>
<p>En el siguiente ejemplo, veremos cómo usar formularios desde el componente secundario. El método <strong>onChange</strong> activará la actualización de estado que se pasará a la entrada secundaria <strong>value</strong> y se renderizará en la pantalla. Un ejemplo similar se utiliza en el capítulo de eventos. Siempre que necesitamos actualizar el estado desde el componente secundario, necesitamos pasar la función que manejará la actualización (<strong>updateState</strong>) como prop (<strong>updateStateProp</strong>).</p>
<p>In the following example, we will see how to use forms from child component. <strong>onChange</strong> method will trigger state update that will be passed to the child input <strong>value</strong> and rendered on the screen. A similar example is used in the Events chapter. Whenever we need to update state from child component, we need to pass the function that will handle updating (<strong>updateState</strong>) as a prop (<strong>updateStateProp</strong>).</p>

<h3>App.jsx</h3>

<pre class="prettyprint notranslate prettyprinted">import React from 'react';<br></br>
<br></br>
class App extends React.Component &#123;<br></br>
<br></br>
   constructor(props) &#123;<br></br>
      super(props);<br></br>
 <br></br>
      this.state = &#123;<br></br>
         data: 'Initial data...'<br></br>
      &#125;<br></br>
<br></br>
      this.updateState = this.updateState.bind(this);<br></br>
   &#125;;<br></br>
<br></br>
   updateState(e) &#123;<br></br>
      this.setState(&#123;data: e.target.value&#125;);<br></br>
   &#125;<br></br>
<br></br>
   render() &#123;<br></br>
      return (<br></br>
         &lt;div&gt;<br></br>
            &lt;Content myDataProp = &#123;this.state.data&#125; <br></br>
               updateStateProp = &#123;this.updateState&#125;&gt;&lt;/Content&gt;<br></br>
         &lt;/div&gt;<br></br>
      );<br></br>
   &#125;<br></br>
&#125;<br></br>
<br></br>
class Content extends React.Component &#123;<br></br>
<br></br>
   render() &#123;<br></br>
      return (<br></br>
         &lt;div&gt;<br></br>
            &lt;input type = "text" value = &#123;this.props.myDataProp&#125; <br></br>
               onChange = &#123;this.props.updateStateProp&#125; /&gt;<br></br>
            &lt;h3&gt;&#123;this.props.myDataProp&#125;&lt;/h3&gt;<br></br>
         &lt;/div&gt;<br></br>
      );<br></br>
   &#125;<br></br>
&#125;<br></br>
export default App;</pre> <h3>main.js</h3> <pre class="prettyprint notranslate prettyprinted">import React from 'react';<br></br>
import ReactDOM from 'react-dom';<br></br>
import App from './App.jsx';<br></br>
<br></br>
ReactDOM.render(&lt;App/&gt;, document.getElementById('app'));</pre>

<p>This will produce the following result.</p>
</div> </div></div> </div>
)
	