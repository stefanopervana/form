export default () => (
  <div>
  <style jsx>{`

.str{color:#080}
.kwd{color:#008}
.com{color:#800}
.typ{color:#7f0055}
.lit{color:#066}
.pun,
.opn,
.clo{color:#660}
.tag{color:#008}
.atn{color:#7f0055}
.atv{color:#080}
.dec,
.var{color:#7f0055}
.fun{color:#f00}}
@media print,projection{.str{color:#060}.kwd{color:#006;font-weight:bold}.com{color:#600;font-style:italic}.typ{color:#404;font-weight:bold}.lit{color:#044}.pun,.opn,.clo{color:#440}.tag{color:#006;font-weight:bold}.atn{color:#404}.atv{color:#060}}pre.prettyprint{border:1px solid #d6d6d6;background-color:#eee;width:98%;border-radius:0;padding:5px;margin:0;margin-bottom:10px;font-size:13px;overflow:auto}
tr td pre.prettyprint{white-space:pre-wrap;width:auto}pre.result{border:1px solid #d6d6d6;background-color:#f1f1f1;width:98%;padding:5px;margin:0;margin-bottom:0;font-size:12px;overflow:auto}
pre.box{border:1px solid #d6d6d6;background-color:#f1f1f1;width:98%;padding:5px;margin:0;margin-bottom:10px;font-size:12px;overflow:auto}
ol.linenums{margin-top:0;margin-bottom:0}
li.L0,li.L1,li.L2,li.L3,li.L5,li.L6,li.L7,li.L8{list-style-type:none}
li.L1,li.L3,li.L5,li.L7,li.L9{background:#eee}
                      `}</style>

    <div className="body">

<p>In this chapter, we will learn how to use events.</p>
<h2>Simple Example</h2>
<p>This is a simple example where we will only use one component. We are just adding <b>onClick</b> event that will trigger <b>updateState</b> function once the button is clicked.</p>
<h3>App.jsx</h3>
<pre class="prettyprint notranslate prettyprinted"><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span><span class="pln">

</span><span class="kwd">class</span><span class="pln"> </span><span class="typ">App</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">React</span><span class="pun">.</span><span class="typ">Component</span><span class="pln"> </span><span class="pun">&#123;</span><span class="pln">

   constructor</span><span class="pun">(</span><span class="pln">props</span><span class="pun">)</span><span class="pln"> </span><span class="pun">&#123;</span><span class="pln">
      </span><span class="kwd">super</span><span class="pun">(</span><span class="pln">props</span><span class="pun">);</span><span class="pln">
		
      </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">&#123;</span><span class="pln">
         data</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Initial data...'</span><span class="pln">
      </span><span class="pun">&#125;</span><span class="pln">

      </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">updateState </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">updateState</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">);</span><span class="pln">

   </span><span class="pun">&#125;;</span><span class="pln">

   updateState</span><span class="pun">()</span><span class="pln"> </span><span class="pun">&#123;</span><span class="pln">
      </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">(&#123;</span><span class="pln">data</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Data updated...'</span><span class="pun">&#125;)</span><span class="pln">
   </span><span class="pun">&#125;</span><span class="pln">

   render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">&#123;</span><span class="pln">
      </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
         </span><span class="str">&lt;div&gt;</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="pln">button onClick </span><span class="pun">=</span><span class="pln"> </span><span class="pun">&#123;</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">updateState</span><span class="pun">&#125;&gt;</span><span class="pln">CLICK</span><span class="pun">&lt;/</span><span class="pln">button</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="str">&lt;h4&gt;</span><span class="pun">&#123;</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">data</span><span class="pun">&#125;&lt;/</span><span class="pln">h4</span><span class="pun">&gt;</span><span class="pln">
         </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
      </span><span class="pun">);</span><span class="pln">
   </span><span class="pun">&#125;</span><span class="pln">
</span><span class="pun">&#125;</span><span class="pln">

</span><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">App</span><span class="pun">;</span></pre>
<h3>main.js</h3>
<pre class="prettyprint notranslate prettyprinted"><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="typ">ReactDOM</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react-dom'</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="typ">App</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'./App.jsx'</span><span class="pun">;</span><span class="pln">

</span><span class="typ">ReactDOM</span><span class="pun">.</span><span class="pln">render</span><span class="pun">(&lt;</span><span class="typ">App</span><span class="pun">/&gt;,</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">'app'</span><span class="pun">));</span></pre>
<p>This will produce the following result.</p>
<img src="/reactjs/images/react-events-simple.jpg" alt="React Events Simple" />
<h2>Child Events</h2>
<p>When we need to update the <b>state</b> of the parent component from its child, we can create an event handler (<b>updateState</b>) in the parent component and pass it as a prop (<b>updateStateProp</b>) to the child component where we can just call it.</p>
<h3>App.jsx</h3>
<pre class="prettyprint notranslate prettyprinted"><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span><span class="pln">

</span><span class="kwd">class</span><span class="pln"> </span><span class="typ">App</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">React</span><span class="pun">.</span><span class="typ">Component</span><span class="pln"> </span><span class="pun">&#123;</span><span class="pln">

   constructor</span><span class="pun">(</span><span class="pln">props</span><span class="pun">)</span><span class="pln"> </span><span class="pun">&#123;</span><span class="pln">
      </span><span class="kwd">super</span><span class="pun">(</span><span class="pln">props</span><span class="pun">);</span><span class="pln">
		
      </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">&#123;</span><span class="pln">
         data</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Initial data...'</span><span class="pln">
      </span><span class="pun">&#125;</span><span class="pln">

      </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">updateState </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">updateState</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">);</span><span class="pln">
   </span><span class="pun">&#125;;</span><span class="pln">

   updateState</span><span class="pun">()</span><span class="pln"> </span><span class="pun">&#123;</span><span class="pln">
      </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">(&#123;</span><span class="pln">data</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Data updated from the child component...'</span><span class="pun">&#125;)</span><span class="pln">
   </span><span class="pun">&#125;</span><span class="pln">

   render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">&#123;</span><span class="pln">
      </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
         </span><span class="str">&lt;div&gt;</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="typ">Content</span><span class="pln"> myDataProp </span><span class="pun">=</span><span class="pln"> </span><span class="pun">&#123;</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">data</span><span class="pun">&#125;</span><span class="pln"> 
               updateStateProp </span><span class="pun">=</span><span class="pln"> </span><span class="pun">&#123;</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">updateState</span><span class="pun">&#125;&gt;&lt;/</span><span class="typ">Content</span><span class="pun">&gt;</span><span class="pln">
         </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
      </span><span class="pun">);</span><span class="pln">
   </span><span class="pun">&#125;</span><span class="pln">
</span><span class="pun">&#125;</span><span class="pln">

</span><span class="kwd">class</span><span class="pln"> </span><span class="typ">Content</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">React</span><span class="pun">.</span><span class="typ">Component</span><span class="pln"> </span><span class="pun">&#123;</span><span class="pln">

   render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">&#123;</span><span class="pln">
      </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
         </span><span class="str">&lt;div&gt;</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="pln">button onClick </span><span class="pun">=</span><span class="pln"> </span><span class="pun">&#123;</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">updateStateProp</span><span class="pun">&#125;&gt;</span><span class="pln">CLICK</span><span class="pun">&lt;/</span><span class="pln">button</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="str">&lt;h3&gt;</span><span class="pun">&#123;</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">myDataProp</span><span class="pun">&#125;&lt;/</span><span class="pln">h3</span><span class="pun">&gt;</span><span class="pln">
         </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
      </span><span class="pun">);</span><span class="pln">
   </span><span class="pun">&#125;</span><span class="pln">
</span><span class="pun">&#125;</span><span class="pln">

</span><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="typ">App</span><span class="pun">;</span></pre>
<h3>main.js</h3>
<pre class="prettyprint notranslate prettyprinted"><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="typ">ReactDOM</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react-dom'</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="typ">App</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'./App.jsx'</span><span class="pun">;</span><span class="pln">

</span><span class="typ">ReactDOM</span><span class="pun">.</span><span class="pln">render</span><span class="pun">(&lt;</span><span class="typ">App</span><span class="pun">/&gt;,</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">'app'</span><span class="pun">));</span></pre>
<p>This will produce the following result.</p>
<img src="/reactjs/images/react-events-child.jpg" alt="React Events Child" />
</div> </div>
)