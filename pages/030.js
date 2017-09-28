import Link from 'next/link'
export default () => (
  <div>
  <style jsx>{`

.p{font-family:inherit;font-weight:400;line-height:1.6;margin-bottom:1.25rem;text-rendering:optimizeLegibility}


p aside{font-size:.875rem;line-height:1.35;font-style:italic}h1,h2,h3,h4,h5,h6{font-family:Avenir,Helvetica,sans-serif;font-weight:400;font-style:normal;color:#000;text-rendering:optimizeLegibility;margin-top:.2rem;margin-bottom:.5rem;line-height:1.4}

h1 small,h2 small,h3 small,h4 small,h5 small,h6 small{font-size:60%;color:#4d4d4d;line-height:0}
h1{font-size:1.375rem}
h2{font-size:1.125rem}
h3{font-size:1.1875rem}
h4{font-size:.9375rem}
h5{font-size:1rem}
h6{font-size:.75rem}
em,i{font-style:italic;line-height:inherit}
b,strong{font-weight:700;line-height:inherit}
small{font-size:60%;line-height:inherit}
code{font-family:Consolas,'Liberation Mono',Courier,monospace;font-weight:700;color:#7f0a0e}
dl,ol,ul{font-size:1rem;line-height:1.6;margin-bottom:1.25rem;list-style-position:outside;font-family:inherit}
ul{margin-left:1.1rem}
ul.no-bullet{margin-left:0}

ul.no-bullet li ol,ul.no-bullet li ul{margin-left:1.25rem;margin-bottom:0;list-style:none}
ul li ol,ul li ul{margin-left:1.25rem;margin-bottom:0;font-size:1rem}
ul.circle li ul,ul.disc li ul,ul.square li ul{list-style:inherit}
ul.square{list-style-type:square;margin-left:1.1rem}
ul.circle{list-style-type:circle;margin-left:1.1rem}
ul.disc{list-style-type:disc;margin-left:1.1rem}
ul.no-bullet{list-style:none}ol{margin-left:1.4rem}
ol li ol,ol li ul{margin-left:1.25rem;margin-bottom:0}
dl dt{margin-bottom:.3rem;font-weight:700}
dl dd{margin-bottom:.75rem}
abbr,acronym{text-transform:uppercase;font-size:90%;color:#646464;border-bottom:1px dotted #ddd;cursor:help}abbr{text-transform:none}
blockquote{margin:0 0 1.25rem;border-left:1px solid #ddd}
blockquote cite{display:block;font-size:.8125rem;color:#333}
blockquote cite a,blockquote cite a:visited{color:#333}

 .prettyprint{
 	background:#fafafa;
 	font-family:Menlo,'Bitstream Vera Sans Mono','DejaVu Sans Mono',Monaco,Consolas,monospace;font-size:.9em;line-height:1.5;padding:10px;overflow:auto}

 .pln{color:#4d4d4c}
 @media screen{
 	.str{color:#718c00}
 	.kwd{color:#8959a8}
 	.com{color:#8e908c}
 	.typ{color:#4271ae}
 	.lit{color:#f5871f}
 	.pun{color:#7d7d7d}
 	.clo,.opn{color:#4d4d4c}
 	.tag{color:#c82829}
 	.atn{color:#f5871f}
 	.atv{color:#3e999f}
 .dec{color:#f5871f}
 .var{color:#c82829}
 .fun{color:#4271ae}
}

 @media print,projection{
 	.str{color:#060}
 .kwd{color:#006;
 	font-weight:700}
 .com
 {color:#600;font-style:italic}
 .typ
 {color:#404;font-weight:700}
 .lit
 {color:#044}
 .clo,
 .opn,
 .pun{color:#440}
 .tag{color:#006;font-weight:700}
 .atn{color:#404}.atv{color:#060}}
 ol.linenums{margin-top:0;margin-bottom:0}
.background{
 background-color: #FFFF00}
}
		.it {
  color: grey;
  font-style: italic;

}
.body {
  font-family: Georgia, 'Nimbus Roman No9 L', 'Century Schoolbook L', serif;
  font-size: 20px;
  line-height: 1.45;
  color: black;
  background: white;
  padding: 0;
margin-top: auto;
margin-right: auto;
margin-bottom: auto;
margin-left: auto;
  max-width: 900px;
}
.it {
  color: #BAB7B7;
  font-style: italic;

}
`}</style>

    <div className="body">

<section className="post-content" role="main">
  <div className="row">

    <div className="small-12 large-9 medium-10 medium-centered large-uncentered columns">
      <div className="centering">
      <p className="p">https://moduscreate.com/key-concepts-to-help-learn-reactjs/</p>
        <h1 className="blog-title">4 Key Concepts to Learning ReactJS</h1>
        <div className="author"><a href="https://moduscreate.com/author/andrew/" title="Posts by Andrew Owen" className="url fn" rel="author">Andrew Owen</a></div><br></br>
        <div className="author-desc">June 12, 2017</div>
        <div className="image">
          <img width="900" src="https://moduscreate.com/wp-content/uploads/2017/06/Learning-React-AO.png" className="attachment-post-thumbnail wp-post-image" alt="Learning React - AO" />        </div>
      </div>
      
        <p className="it">En Modus Create, nuestra cultura se define por unos cuantos objetivos clave, incluyendo el valor que ponemos en el aprendizaje constante y el intercambio de conocimientos. No es ninguna sorpresa que cuando no estoy escribiendo pruebas de automatización para un cliente, estoy trabajando en proyectos personales. Con la mayoría de los proyectos de desarrollo, llega el momento de decidir con qué herramientas desea construir su interfaz de usuario. Para mi último proyecto, decidí usar la biblioteca React. El único problema era ... No sabía React - así que decidí ver hasta dónde podía llegar usando los recursos a mi disposición.</p>

        <p className="p">At Modus Create, our culture is defined by a few key objectives, including the value we place on constant learning and sharing of knowledge. It’s no surprise that when I’m not writing automation tests for a client, I am working on personal projects. With most development projects, there comes a time to decide what tools you want to build your UI with. For my latest project, I decided I wanted to use the React library. The only problem was…I didn’t know React — so I decided to see how far I could get using the resources at my disposal.</p>
<p className="it">Con la ayuda de la extensa documentación de React, así como un <a href="https://reactforbeginners.com/"> impresionante curso de Wes Bos</a>, he recogido suficiente conocimiento para ser peligroso, mientras sólo rascar la superficie de lo que React puede hacer. A través de todo, documenté mi toma aways y hizo una lista de cuatro puntos principales que fueron beneficiosos para entender y utilizar la biblioteca React. Si usted ha pensado en recoger React o ya ha comenzado y está teniendo problemas con los conceptos básicos, este artículo le motivará a continuar aprendiendo y ampliar sus habilidades.</p>

<p className="p">With the help of React’s extensive documentation, as well as an <a href="https://reactforbeginners.com/">awesome course by Wes Bos</a>, I’ve picked up enough knowledge to be dangerous, while still only scratching the surface of what React can do. Through it all, I documented my take aways and made a list of four main points that were beneficial to understanding and utilizing the React library. If you’ve thought about picking up React or have already started and are having trouble with the basics, this article will motivate you to continue learning and expand your skillset.</p>
<h2>It’s Dangerous To Go Alone! Use the React-CLI </h2>
<p className="it">En lugar de enviarte al desierto con sólo el framework y tu determinación inquebrantable, la gente de Facebook ha creado una herramienta impresionante para empezar con ReactJS. Apropiadamente llamado <a href="https://github.com/facebookincubator/create-react-app">Create-React-App</a>, la herramienta desarrolla la estructura de archivos de su aplicación React e incluye un servidor dev, así como un compilador, un bundler y más. Con mucho que aprender ya en esta biblioteca, no tener que preocuparse por su código estandar es un alivio gigante y la estructura de archivos que la herramienta de CLI proporciona en la instalación le dará todo lo que necesita para sumergirse en la creación de su Dream App ™.</p>

<p className="p">Rather than send you into the wilderness with only the framework and your unwavering determination, the folks at Facebook have created an awesome tool for getting started with ReactJS. Aptly named <a href="https://github.com/facebookincubator/create-react-app">Create-React-App</a>, the tool scaffolds the file structure for your React app and includes a dev server, as well as a compiler, bundler, and more. With so much to learn already in this library, not having to worry about your boilerplate code is a giant relief and the file structure that the CLI tool provides on install will give you everything you need to dive into creating your Dream App™.</p>
<p className="it">La configuración es simple. Simplemente utilice NPM para instalar</p>

<p className="p">Setup is simple. Simply use NPM to install</p>
<pre className="prettyprint prettyprinted"><span className="pln">npm install create</span><span className="pun">-</span><span className="pln">react</span><span className="pun">-</span><span className="pln">app </span><span className="pun">-</span><span className="pln">g </span></pre>
<p className="it">y utilizar el paquete recién instalado para crear su directorio de proyecto e iniciar su servidor dev con el script npm creado por la herramienta CLI.</p>

<p className="p">and use the newly installed package to create your project directory and start your dev server with the npm script created by the CLI tool.</p>
<pre className="prettyprint prettyprinted"><span className="pln">create</span><span className="pun">-</span><span className="pln">react</span><span className="pun">-</span><span className="pln">app your_app_name<br></br>
cd your_app_name<br></br>
npm start </span></pre>
<p className="it">¡Boom! Ahora tiene una aplicación ReactJS "Hello, World!" Completamente funcional, lista para ser expulsada con su propio código. Además, el servidor dev escuchará los cambios que realice en su código y actualizará su aplicación automáticamente. La pereza programática FTW!</p>

<p className="p">Boom! You now have a fully functioning “Hello, World!” ReactJS application, ready to be flushed out with your own code. In addition, the dev server will listen for any changes you make to your code, and refresh your application automatically! Programmatic Laziness FTW!</p>
<h2>Props: Take One Down, Pass It Around! </h2>
<p className="it">Los props son una de las características más poderosas de React. Le permiten tomar métodos, variables e incluso <a href="https://facebook.github.io/react/docs/state-and-lifecycle.html">objetos de estado</a> (otra característica de ReactJS) y pasarlos a diferentes partes de su aplicación como <strong>PROP</strong>iedades. Si piensa en la estructura de componentes de su aplicación como un árbol, los Props le permiten crear cualquiera de los ejemplos enumerados anteriormente en un componente de alto nivel (por ejemplo, su componente <code>App.js</code>) y pasarlos a cualquier componente anidado que se ramifica desde esa ubicación. Esto es importante por dos razones:</p>

<p className="p">Props are one of React’s most powerful features. They allow you to take methods, variables, and even <a href="https://facebook.github.io/react/docs/state-and-lifecycle.html">state objects</a> (another ReactJS feature) and pass them around to different parts of your application as <strong>PROP</strong>erties. If you think of the component structure in your application like a tree, Props allow you to create any of the examples listed above in a high level component (eg your <code>App.js</code> component), and pass them down to any nested component that branches from that location. This is important for two reasons:</p>
<ul>
<li className="it"><strong>Reduce la duplicación de código.</strong> Si sabes que vas a necesitar un método o un objeto de estado en más de un componente, es mejor definirlos en un lugar y pasarlos a través de Props, en lugar de duplicar datos en cada respectivo componente. Esto es especialmente importante cuando se trata de objetos de estado porque... </li>

<li className="p"><strong>It reduces code duplication.</strong> If you know you’re going to need a method or state object in more than one component, it’s better to define them in one place and pass them down via Props, rather than duplicate data in each respective component. This is especially important when dealing with state objects because…</li>
<li className="it"><strong>Mantiene objetos de estado sincronizados.</strong> Para un principiante, entender cómo funciona el estado es importante y nada puede hacer que sea más difícil que tener sus objetos de estado fuera de sincronización entre sí porque el mismo estado es definido en múltiples componentes.</li>
<li className="p"><strong>It keeps state objects in sync.</strong> For a beginner, understanding how state works is important and nothing can make that more difficult than having your state objects out of sync with one another because the same state is defined in multiple components.</li>
</ul>
<p className="it">Aquí hay un ejemplo en el que definimos un método en nuestro archivo de componente principal (App.js) y luego lo pasamos a otro componente que se está procesando dentro de App.js</p>

<p className="p">Here’s an example where we define a method in our main component file (App.js) and then pass it down to another component being rendered inside App.js</p>
<pre className="prettyprint prettyprinted"><span className="kwd">class</span><span className="pln"> </span><span className="typ">App</span><span className="pln"> </span><span className="kwd">extends</span><span className="pln"> </span><span className="typ">React</span><span className="pun">.</span><span className="typ">Component</span><span className="pln"> </span><span className="pun">&#123;</span><span className="pln"><br></br>
 
  </span><span className="background"><span className="pln">handleSubmit </span><span className="pun">=</span><span className="pln"> </span><span className="pun">()</span><span className="pln"> </span><span className="pun">=&gt;</span><span className="pln"> </span><span className="pun">&#123;</span><span className="pln"><br></br>
    </span><span className="com">// your code</span><span className="pln"><br></br>
  </span><span className="pun">&#125;</span></span><span className="pln"><br></br>
 <br></br>
  render</span><span className="pun">()</span><span className="pln"> </span><span className="pun">&#123;</span><span className="pln"><br></br>
    </span><span className="kwd">return</span><span className="pln"> </span><span className="pun">(</span><br></br><span className="pln">
      </span><span className="str">&lt;div&gt;</span><span className="pln"><br></br>
        </span><span className="pun">&lt;</span><span className="typ">ExampleComponent</span><br></br><span className="pln">
          </span><span className="background"><span className="pln">handleSubmit</span><span className="pun">=&#123;</span><span className="kwd">this</span><span className="pun">.</span><span className="pln">handleSubmit</span><span className="pun">&#125;</span></span><br></br><span className="pln">   
        </span><span className="pun">/&gt;</span><span className="pln">
      </span><br></br><span className="pun">&lt;/</span><span className="pln">div</span><span className="pun">&gt;</span><br></br><span className="pln">
    </span><span className="pun">)</span><br></br><span className="pln">
  </span><span className="pun">&#125;</span><br></br><span className="pln">
</span><span className="pun">&#125;</span><span className="pln">
 <br></br>
 <br></br>
</span><span className="kwd">export</span><span className="pln"> </span><span className="kwd">default</span><span className="pln"> </span><span className="typ">App</span><span className="pun">;</span></pre>
<p className="it">Y en nuestro <code>ExampleComponent</code> ahora podemos usarlo así:</p>

<p className="p">And in our <code>ExampleComponent</code> we can now use it like so:</p>
<pre className="prettyprint prettyprinted"><span className="pln"> 
  render</span><span className="pun">()</span><span className="pln"> </span><span className="pun">&#123;</span><span className="pln"><br></br>
    <br></br>
    </span><span className="background"><span className="kwd">const</span><span className="pln"> </span><span className="pun">&#123;</span><span className="pln"> handleSubmit </span><span className="pun">&#125;</span><span className="pln"> </span><span className="pun">=</span><span className="pln"> </span><span className="kwd">this</span><span className="pun">.</span><span className="pln">props</span></span><span className="pln"><br></br>
 <br></br>
    </span><span className="kwd">return</span><span className="pln"> </span><span className="pun">(</span><span className="pln">
      </span><br></br><span className="str">&lt;div&gt;</span><br></br><span className="pln">
        </span><span className="pun">&lt;</span><span className="pln">button onClick</span><span className="pun">=&#123;</span><span className="pln"> </span><span className="background"><span className="pln">handleSubmit</span></span><span className="pln"> </span><span className="pun">&#125;&gt;</span><span className="typ">Click</span><span className="pln"> </span><span className="typ">Me</span><span className="pun">!&lt;/</span><span className="pln">button</span><span className="pun">&gt;</span><br></br><span className="pln">
      </span><span className="str">&lt;/</span><span className="str">div</span><span className="str">&gt;</span><br></br><span className="pln">
    </span><span className="pun">)</span><br></br><span className="pln">
  </span><span className="pun">&#125;</span><br></br><span className="pln">
</span><span className="pun">&#125;</span><br></br><span className="pln">
 <br></br>
</span><span className="kwd">export</span><span className="pln"> </span><span className="kwd">default</span><span className="pln"> </span><span className="typ">ExampleComponent</span><span className="pun">;</span></pre>
<p className="it">La <code>ExampleComponent</code> ahora puede utilizar el <code>handleSubmit</code>método y el método en sí puede ser utilizado a través de múltiples componentes. Lo mejor de todo es que sólo se define una vez.</p>

<p className="p">The <code>ExampleComponent</code> can now use the <code>handleSubmit</code> method and the method itself can be used across multiple components. Best of all, it’s defined only once.</p>
<h2>State: One State To Rule Them All  </h2>
<p className="it">El Estado es otra característica central poderosa de ReactJS y, al igual que los Props, sólo debe definirse en un solo lugar. Esto viene de la idea de la programación de tener "una sola fuente de la verdad". Piense en el estado como una especie de base de datos local que contiene la versión procesada actual de los datos de su aplicación en un objeto gigante. La mayoría de las aplicaciones web utilizan una base de datos para almacenar el estado de la aplicación y la mejor práctica indica que el estado React se trata casi del mismo modo.</p>

<p className="p">State is yet another powerful core feature of ReactJS and, much like Props, should only be defined in one place. This comes from the programming idea of having “A Single Source of Truth”. Think of state as sort of a local database that holds the current rendered version of your app’s data in a giant object. Most web apps use one database to store application state and best practice indicates that React state is treated much the same.</p>
<p className="it">Esto significa que debe definir estado una vez, casi como un estado maestro, en una ubicación de alto nivel (piense App.js) y pasarlo a componentes secundarios a través de props. Esto garantiza que su estado esté siempre sincronizado, que pueda realizar un seguimiento/ver el historial de todos los cambios de estado en un lugar y que no vuelva a representar innecesariamente.</p>

<p className="p">This means you should define state once, almost as a master state, in a high level location (think App.js) and pass it down to child components via props. This ensures that your state is always in sync, that you can track/view the history of all state changes in one place, and that you aren’t re-rendering unnecessarily.</p>
<h2>PropTypes: Not Necessary, But Helpful! </h2>
<p className="it">Volviendo a Props, un concepto final digno de mención es declarar PropTypes. PropTypes son una manera de decirle a su aplicación qué tipo de datos su componente debe esperar que se le pasen. Piense en PropTypes como una forma de declaración de tipo estricto. PropTypes puede incluso determinar si los datos transmitidos son necesarios o no (es decir, not undefined o null).</p>

<p className="p">Switching back to Props, one final concept worth mentioning is declaring PropTypes. PropTypes are a way for you to tell your application what type of data your component should expect to be passed to it. Think of PropTypes as a form of strict type declaration. PropTypes can even determine whether the data passed down is required or not (meaning not undefined or null).</p>
<p className="it">Aunque no es necesario para que su aplicación funcione correctamente, me pareció útil mientras aprendía React porque me ayudó a entender mejor qué datos estaba transmitiendo a mi hijo. Aquí es un ejemplo de PropTypes utilizado en el ejemplo anterior, <code>ExampleComponent</code>.</p>

<p className="p">While not necessary for your application to function properly, I found it helpful while learning React because it helped me to better understand what data I was actually passing down to my child Components. Here is an example of PropTypes being used in the previous example, <code>ExampleComponent</code>.</p>
<pre className="prettyprint prettyprinted"><span className="kwd">class</span><span className="pln"> </span><span className="typ">ExampleComponent</span><span className="pln"> </span><span className="kwd">extends</span><span className="pln"> </span><span className="typ">React</span><span className="pun">.</span><span className="typ">Component</span><span className="pln"> </span><span className="pun">&#123;</span><span className="pln"><br></br>
 <br></br>
  </span><span className="background"><span className="kwd">static</span><span className="pln"> propTypes </span><span className="pun">=</span><br></br><span className="pln"> </span><span className="pun">&#123;</span><span className="pln">
    handleSubmit</span><span className="pun">:</span><span className="pln"> </span><span className="typ">React</span><span className="pun">.</span><span className="typ">PropTypes</span><span className="pun">.</span><span className="pln">func</span><span className="pun">.</span><span className="pln">isRequired
  </span><span className="pun">&#125;</span></span><br></br><br></br><span className="pln">
 
  render</span><span className="pun">()</span><span className="pln"> </span><span className="pun">&#123;</span><br></br><br></br><span className="pln">
    
    </span><span className="kwd">const</span><span className="pln"> </span><span className="pun">&#123;</span><span className="pln"> handleSubmit </span><span className="pun">&#125;</span><span className="pln"> </span><span className="pun">=</span><span className="pln"> </span><span className="kwd">this</span><span className="pun">.</span><span className="pln">props
 
    </span><br></br><br></br><span className="kwd">return</span><span className="pln"> </span><span className="pun">(</span><span className="pln">
      </span><br></br><span className="str">&lt;div&gt;</span><span className="pln">
        </span><span className="pun">&lt;</span><span className="pln">button onClick</span><span className="pun">=&#123;</span><span className="pln"> handleSubmit </span><span className="pun">&#125;&gt;</span><span className="typ">Click</span><span className="pln"> </span><span className="typ">Me</span><span className="pun">!&lt;/</span><span className="pln">button</span><span className="pun">&gt;</span><span className="pln">
      </span><br></br><span className="str">&lt;/</span><span className="str">div</span><span className="str">&gt;</span><br></br><span className="pln">
    </span><span className="pun">)</span><span className="pln">
  </span><br></br><span className="pun">&#125;</span><span className="pln">
</span><br></br><span className="pun">&#125;</span></pre>
<p className="it">Declarar PropTypes para <code>handleSubmit</code> asegurarse de que esperamos que sea una función y no puede ser nulo o indefinido. Esto también sirve como una gran herramienta de depuración. Si los datos transmitidos no coinciden con PropType declarados, React proporcionará un error de consola que le permitirá saber qué tipo de datos se transmitió y qué tipo de datos esperaba. Declararlos de forma estática (hecho anteriormente) es parte de los iniciadores de propiedades de ES7. Se utiliza más para el estilo que para la función, permite que los tipos de props se declaren en la parte superior de la clase en lugar de fuera de la clase debajo. Esto hace que sus tipos de props sean más legibles y visibles. Lo mismo se puede hacer para DefaultProps si desea que los tipos de Props tengan valores predeterminados.</p>

<p className="p">Declaring PropTypes for <code>handleSubmit</code> ensures that the we are expecting it to be a function and it cannot be null or undefined. This serves as a great debugging tool as well. If the data passed down does not match the PropType declared, React will provide a console error letting you know what data type was passed down as well as what data type it was expecting. Declaring them statically (done above) is part of ES7 property initializers. Used more for style than function, it allows for prop types to be declared at the top of your class rather than outside the class underneath it. This makes your prop types more readable and visible. The same can be done for defaultProps if you wish for those prop types to have default values.</p>
<p className="it">Es posible que no vea a los desarrolladores React más experimentados que utilicen esta función, pero recomiendo encarecidamente que entre en el hábito si acaba de empezar con React.</p>

<p className="p">You might not see more experienced React developers utilizing this feature, but I highly recommend getting into the habit if you’re just getting started with React.</p>


<p className="p"><br></br></p>
<div align="center"><a href="https://moduscreate.com/wp-content/uploads/2017/06/learning_reactjs_the_more_you_know.jpg"><img src="https://moduscreate.com/wp-content/uploads/2017/06/learning_reactjs_the_more_you_know.jpg" alt="learning_reactjs_the_more_you_know" width="600" height="338" className="aligncenter size-full wp-image-11221" /></a> </div>


<p className="p"><br></br></p>
<h2>Conclusion </h2>
<p className="it">React es una biblioteca de front-end robusta y altamente escalable con mucho por debajo del capo para aprender. Comprender los conceptos básicos es crucial para crear aplicaciones complejas, pero con la create-react-app CLI y los consejos que he enumerado, estarás bien en tu camino para crear tu primera aplicación de ReactJS y espero que mucho más después. ¿Es nuevo en React? ¿Tiene consejos o trucos para hacer el aprendizaje más fácil o divertido? Háganos saberlo en los comentarios!</p>

<p className="p">React is a robust and highly scalable front-end library with a lot under the hood to learn. Understanding core concepts is crucial to creating complex applications, but with the create-react-app CLI and the tips I’ve listed, you’ll be well on your way to creating your first ReactJS application and hopefully many more after. Are you new to React? Got any tips or tricks for making learning easier or fun? Let us know in the comments!</p>
</div>

</div></section></div></div>
)
