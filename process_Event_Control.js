const n_API = require(process.env.HOME+ "/Required/node_API_header.js").n_API_init({  
  "node_mode":true,
  "n_m_t":true,
  "n_m_t_r":true,
  "node_mode_threads":true,
  "circular_replacer":true,
  "required_local_dir":true,
  "async_listener":true,
  "a_l":true,
  "events":true    
},
{
  location_dir:__dirname
});
const p_Ev_C_circular_replacer       =  n_API.API_n_c.circular_replacer
const p_Ev_C_node_mode               =  n_API.API_n_c.API_node_mode.node_mode
const p_Ev_C_node_mode_threads       =  n_API.API_n_c.API_node_mode.node_mode_threads({
                                                                                calling_file:__filename.split("/")[__filename.split("/").length-1]
                                                                              })
const p_Ev_C_n_m_t_r                 =  n_API.API_n_c.API_node_mode.n_m_t_r
const p_Ev_C_EventEmitter            =  n_API.API_n_b_p.events.EventEmitter
const p_Ev_C_a_l                     =  n_API.API_n_c.a_l
 
function p_Ev_C_constructor (   dev_obj   ){
            var process_Event_Control = {}
            var p_Ev_C = {}
            p_Ev_C.dev_obj = dev_obj                        
            p_Ev_C.s_c = {}  //figure out how to protect this might not even use this
            p_Ev_C.ev_rgs_obj = {}
            // p_Ev_i 
            //  process event inserter, used to add custom listeners to the process
            // try not to use functions
            // if this does not work try to refer to the needed object unreferencedd
            const p_Ev_i = function(   dev_obj   ){                                                  
                  for(   var p_Ev_C_2_i =0; p_Ev_C_2_i != Object.entries(   dev_obj   ).length ; p_Ev_C_2_i++ ){
                      // console.log(   Object.entries(   dev_obj   )[p_Ev_C_2_i]   )
                      p_Ev_C.s_c.event_name = Object.keys(   dev_obj   )[p_Ev_C_2_i]
                      p_Ev_C.s_c.actual     = Object.entries(   Object.entries(   dev_obj   )[p_Ev_C_2_i][1]   )                                              
                      for(   var p_Ev_C_3_i =0; p_Ev_C_3_i != p_Ev_C.s_c.actual.length; p_Ev_C_3_i++){          


                          if(   p_Ev_C.s_c.actual[p_Ev_C_3_i][1].append_type   == undefined){


                              p_Ev_C.s_c.actual[p_Ev_C_3_i][1].append_type = 'once'


                          }      


                          process[p_Ev_C.s_c.actual[p_Ev_C_3_i][1].append_type](   p_Ev_C.s_c.event_name,   p_Ev_C_a_l({
                                                                                    listener_function:p_Ev_C.s_c.actual[p_Ev_C_3_i][1].execute,
                                                                                    sync             :p_Ev_C.s_c.actual[p_Ev_C_3_i][1].sync
                                                                                },p_Ev_C.s_c.actual[p_Ev_C_3_i]   ))
                      }
                            
                      






                      // process.on(   Object.keys(   dev_obj   )[p_Ev_C_2_i],   )
                  }                  
            }
            const p_Ev_C_listen_handle_n_m_obj = {   
                           node_mode_args:{
                                              appender:'emitter'
                                          },
                                      n_m:p_Ev_C_n_m_t_r['p_Ev_C_listen_handle_n_m'],
                                    codes:{      
                                            'no_const_fn':
                                            function(){        
                                                p_Ev_C.ev_rgs.on(   'removeListener',function(){
                                                    var dev_obj = {}
                                                    for(var p_Ev_C_0_i =0; p_Ev_C_0_i != arguments.length; p_Ev_C_0_i++ ){

                                                        
                                                        if(   typeof(   arguments[p_Ev_C_0_i]   ) == 'string'   ){


                                                            dev_obj.events = arguments[p_Ev_C_0_i]


                                                        }


                                                        else if(   typeof(   arguments[p_Ev_C_0_i]   ) == 'function'   ){


                                                            dev_obj.listener = arguments[p_Ev_C_0_i]

                                                            
                                                        }     


                                                    }
                                                    p_Ev_C.ev_rgs_obj.newListener = p_Ev_C.ev_rgs.rawListeners(   'newListener'   )
                                                    p_Ev_C.ev_rgs.removeAllListeners(   'newListener'   )
                                                    p_Ev_C.ev_rgs.on(   dev_obj.events,dev_obj.listener   )
                                                    p_Ev_C.ev_rgs.on(   'newListener',p_Ev_C.ev_rgs_obj.newListener   )
                                                    delete p_Ev_C.ev_rgs_obj.newListener              
                                                })
                                                p_Ev_C.ev_rgs.on(   'newListener', function(){
                                                    var dev_obj = {}
                                                    for(var p_Ev_C_1_i =0; p_Ev_C_1_i != arguments.length; p_Ev_C_1_i++ ){

                                                        
                                                        if(   typeof(   arguments[p_Ev_C_1_i]   ) == 'string'   ){


                                                            dev_obj.events = arguments[p_Ev_C_1_i]


                                                        }


                                                        else if(   typeof(   arguments[p_Ev_C_1_i]   ) == 'function'   ){


                                                            dev_obj.listener = arguments[p_Ev_C_1_i]

                                                            
                                                        }     


                                                    }  


                                                    if(   typeof(   p_Ev_C.ev_rgs.rawListeners(   dev_obj.events   )   ) =='function'  ){


                                                        p_Ev_C.ev_rgs_obj.removeListener = p_Ev_C.ev_rgs.rawListeners(   'removeListener'   )
                                                        p_Ev_C.ev_rgs.removeAllListeners(   'removeListener'   )
                                                        p_Ev_C.ev_rgs.off(   dev_obj.events,p_Ev_C.ev_rgs.rawListeners(   dev_obj.events   )   )   
                                                        p_Ev_C.ev_rgs.on(   'removeListener',p_Ev_C.ev_rgs_obj.removeListener   )
                                                        delete p_Ev_C.ev_rgs_obj.removeListener               


                                                    }          
                                                    const p_Ev_C_1_i_n_m = p_Ev_C_node_mode(p_Ev_C_n_m_t_r["p_Ev_C_1_i_n_m"],[[      
                                                                                  'newlist_broken',  //FUNCTIONALITY: when the API cannot remove new events that the dev is trying to attach
                                                                                  function(){        
                                                                                      console.log(arguments)
                                                                                      console.log(dev_obj)
                                                                                      console.log(   "ridiculous"   )                     
                                                                                  }],                                                                                                         
                                                                            ])
                                                    p_Ev_C_1_i_n_m.emit(   p_Ev_C_node_mode_threads[1][0],p_Ev_C_node_mode_threads[1][1]  )        
                                                })                      
                                            },
                                            'const_fn_new_help':
                                            function(){
                                                  p_Ev_C.ev_rgs_obj.removeListener_default = function(){
                                                                                                  var dev_obj = {}
                                                                                                  for(var p_Ev_C_0_i =0; p_Ev_C_0_i != arguments.length; p_Ev_C_0_i++ ){

                                                                                                      
                                                                                                      if(   typeof(   arguments[p_Ev_C_0_i]   ) == 'string'   ){


                                                                                                          dev_obj.events = arguments[p_Ev_C_0_i]


                                                                                                      }


                                                                                                      else if(   typeof(   arguments[p_Ev_C_0_i]   ) == 'function'   ){


                                                                                                          dev_obj.listener = arguments[p_Ev_C_0_i]

                                                                                                          
                                                                                                      }     


                                                                                                  }
                                                                                                
                                                                                                  p_Ev_C.ev_rgs.off(   'newListener',p_Ev_C.ev_rgs_obj.newListener_default   )
                                                                                                  p_Ev_C.ev_rgs.on(   dev_obj.events,dev_obj.listener   )
                                                                                                  p_Ev_C.ev_rgs.on(   'newListener',p_Ev_C.ev_rgs_obj.newListener_default   )
                                                                                                               
                                                                                              }
                                                  p_Ev_C.ev_rgs_obj.newListener_default = function(   dev_obj   ){                                                                                
                                                                                              console.log(   p_Ev_C.ev_rgs   )
                                                                                              debugger;
                                                                                              console.log(   dev_obj.events,p_Ev_C.ev_rgs.rawListeners(   dev_obj.events   )   )
                                                                                              console.log(   typeof(   p_Ev_C.ev_rgs.rawListeners(   dev_obj.events   )   )   )
                                                                                              console.log(   typeof(   dev_obj.listener   )   )    

                                                                                              
                                                                                              if(   typeof(   p_Ev_C.ev_rgs.rawListeners(   dev_obj.events   )   ) =='function'  ){


                                                                                                      p_Ev_C.ev_rgs.off(   'removeListener',p_Ev_C.ev_rgs_obj.removeListener_default   )
                                                                                                      p_Ev_C.ev_rgs.off(   dev_obj.events,p_Ev_C.ev_rgs.rawListeners(   dev_obj.events   )   )   
                                                                                                      p_Ev_C.ev_rgs.on(   'removeListener',p_Ev_C.ev_rgs_obj.removeListener_default   ) 
                                                                                                      debugger                                                                                                  


                                                                                              }    
                                                                                              

                                                                                              const p_Ev_C_1_i_n_m = p_Ev_C_node_mode(p_Ev_C_n_m_t_r["p_Ev_C_1_i_n_m"],[[      
                                                                                                                            'newlist_broken',  //FUNCTIONALITY: when the API cannot remove new events that the dev is trying to attach
                                                                                                                            function(){        
                                                                                                                                console.log(arguments)
                                                                                                                                console.log(dev_obj)
                                                                                                                                console.log(   "ridiculous"   )   
                                                                                                                                debugger;                  
                                                                                                                            }],                                                                                                         
                                                                                                                      ])
                                                                                              p_Ev_C_1_i_n_m.emit(   p_Ev_C_node_mode_threads[1][0],p_Ev_C_node_mode_threads[1][1]  ) 
                                                                                              p_Ev_C.ev_rgs.off(   'removeListener',p_Ev_C.ev_rgs_obj.removeListener_default   )
                                                                                              p_Ev_C.ev_rgs.off(   'newListener' , p_Ev_C.ev_rgs_obj.newListener_default)
                                                                                              p_Ev_C.ev_rgs.on(   'removeListener',p_Ev_C.ev_rgs_obj.removeListener_default   ) 
                                                                                              p_Ev_C.ev_rgs.on(   'newListener' , p_Ev_C.ev_rgs_obj.newListener_rgs)          
                                                                                          }  
                                                  p_Ev_C.ev_rgs_obj.newListener_rgs = function(){  
                                                                                          console.log(arguments)
                                                                                          var dev_obj = {}                                                                                
                                                                                          for(var p_Ev_C_1_i =0; p_Ev_C_1_i != arguments.length; p_Ev_C_1_i++ ){

                                                                                              
                                                                                              if(   typeof(   arguments[p_Ev_C_1_i]   ) == 'string'   ){


                                                                                                  if(   arguments[p_Ev_C_1_i]  == 'removeListener' &&  arguments[p_Ev_C_1_i+1] == p_Ev_C.ev_rgs_obj.removeListener_default ){


                                                                                                      // console.log('infinte loop avoided')
                                                                                                      return


                                                                                                  }


                                                                                                  dev_obj.events = arguments[p_Ev_C_1_i]


                                                                                              }


                                                                                              else if(   typeof(   arguments[p_Ev_C_1_i]   ) == 'function'   ){


                                                                                                  dev_obj.listener = arguments[p_Ev_C_1_i]

                                                                                                  
                                                                                              }     


                                                                                          }                                                                            
                                                                                          debugger;
                                                                                          p_Ev_C.ev_rgs.off(   'removeListener',p_Ev_C.ev_rgs_obj.removeListener_default   )                                                                          
                                                                                          p_Ev_C.ev_rgs.off(   'newListener' ,p_Ev_C.ev_rgs_obj.newListener_rgs   )
                                                                                          p_Ev_C.ev_rgs.on(   'removeListener',p_Ev_C.ev_rgs_obj.removeListener_default   )
                                                                                          p_Ev_C.ev_rgs.on(   'newListener' , p_Ev_C.ev_rgs_obj.newListener_default   )
                                                                                          // process.nextTick(() =>{
                                                                                              p_Ev_C.ev_rgs.emit(   'newListener' , dev_obj   )                                                                             
                                                                                          // })
                                                                                      }                                                                                                          
                                                  p_Ev_C.ev_rgs.on(   'removeListener',  p_Ev_C.ev_rgs_obj.removeListener_default)
                                                  p_Ev_C.ev_rgs.on(   'newListener' , p_Ev_C.ev_rgs_obj.newListener_rgs)                                    
                                            },  
                                            'use_class_stable':
                                            function(){                        
                                                  if(    p_Ev_C_listen_handle_n_m_obj.node_mode_args.appender == 'emitter'   ){  


                                                      class p_Ev_C_Emitter extends p_Ev_C_EventEmitter {
                                                          constructor(){
                                                            super()  
                                                          }
                                                          p_Ev_C_Emitter_warn(){
                                                              process.emitWarning('accessing low level process management', {
                                                                  code: 'process_Event_Control Warning',
                                                                  detail: 'Hardware resources will be severly compromised if accesed',
                                                                  ctor:function(){}
                                                              });  
                                                          }
                                                          get on(){                                                                                        
                                                                this.p_Ev_C_Emitter_warn()                                              
                                                              // not working for some reason not sure if placing in a function is safe becuas of sync async                                                                                 
                                                          }    
                                                          get once(){                                                                                        
                                                                this.p_Ev_C_Emitter_warn()                                                                                                                                                                             
                                                          }                                          
                                                          get addListener(){
                                                                this.p_Ev_C_Emitter_warn()
                                                          }
                                                          get prependListener(){
                                                                this.p_Ev_C_Emitter_warn()
                                                          } 
                                                          get prependOnceListener(){
                                                                this.p_Ev_C_Emitter_warn()
                                                          }  
                                                          get off(){
                                                                this.p_Ev_C_Emitter_warn()
                                                          }  
                                                          get removeListener(){
                                                                this.p_Ev_C_Emitter_warn()
                                                          }
                                                          get removeAllListeners(){
                                                                this.p_Ev_C_Emitter_warn() 
                                                          }                                                                                                                     
                                                          get snufjet(){
                                                              return this.__proto__.__proto__.addListener
                                                          }
                                                          get promptfan(){
                                                              return this.__proto__.__proto__.once
                                                              // cant use this it uses the above prototype
                                                          }
                                                          get tjet(){
                                                              return this.__proto__.__proto__.prependListener
                                                          }
                                                          get diptuck(){
                                                              return this.__proto__.__proto__.prependOnceListener
                                                              // camt use this it uses the above prototypes
                                                          }
                                                          get niscom(){
                                                              return this.__proto__.__proto__.removeListener
                                                          }
                                                          get aoki(){
                                                              return this.__proto__.__proto__.removeAllListeners
                                                              // cant use this it uses the above prototypes
                                                          }
                   
                                                      }                                                           
                                                      p_Ev_C.ev_rgs = new p_Ev_C_Emitter()                                                                                                                                                                                                       
                                                      p_Ev_C.ev_rgs.snufjet(   "p_Ev_i",p_Ev_i   )


                                                  }  


                                                  else if(    p_Ev_C_listen_handle_n_m_obj.node_mode_args.appender == 'method'   ){


                                                      p_Ev_C.p_Ev_i = p_Ev_i


                                                  }                           
                                            },
                                            'use_setInterval_unstable':
                                            function(){
                                                  // // this can only handle one on implementation  and much precautions must be put in place to prevent it from
                                                  // self corrupting or doing unauthorized things also there is the sync async problem that makes this solution ineffective
                                                  class p_Ev_C_Emitter extends p_Ev_C_EventEmitter {}
                                                  p_Ev_C.ev_rgs = new p_Ev_C_Emitter() 
                                                  p_Ev_C.ev_rgs_obj.removeListener_default = function(){
                                                                                                  var dev_obj = {}
                                                                                                  for(var p_Ev_C_0_i =0; p_Ev_C_0_i != arguments.length; p_Ev_C_0_i++ ){

                                                                                                      
                                                                                                      if(   typeof(   arguments[p_Ev_C_0_i]   ) == 'string'   ){


                                                                                                          dev_obj.events = arguments[p_Ev_C_0_i]


                                                                                                      }


                                                                                                      else if(   typeof(   arguments[p_Ev_C_0_i]   ) == 'function'   ){


                                                                                                          dev_obj.listener = arguments[p_Ev_C_0_i]

                                                                                                          
                                                                                                      }     


                                                                                                  }
                                                                                                
                                                                                                  p_Ev_C.ev_rgs.off(   'newListener',p_Ev_C.ev_rgs_obj.newListener_default   )
                                                                                                  p_Ev_C.ev_rgs.on(   dev_obj.events,dev_obj.listener   )
                                                                                                  p_Ev_C.ev_rgs.on(   'newListener',p_Ev_C.ev_rgs_obj.newListener_default   )
                                                                                                               
                                                                                              }
                                                  p_Ev_C.ev_rgs_obj.newListener_interval = {};
                                                  p_Ev_C.ev_rgs_obj.newListener_interval.ev_metadata = {}
                                                  // contains events, listener, actual
                                                  p_Ev_C.ev_rgs_obj.newListener_default = function(){     

                                                                                              var dev_obj = {}                                                                                
                                                                                              for(var p_Ev_C_1_i =0; p_Ev_C_1_i != arguments.length; p_Ev_C_1_i++ ){

                                                                                                  
                                                                                                  if(   typeof(   arguments[p_Ev_C_1_i]   ) == 'string'   ){


                                                                                                      if(   arguments[p_Ev_C_1_i]  == 'removeListener' &&  arguments[p_Ev_C_1_i+1] == p_Ev_C.ev_rgs_obj.removeListener_default ){


                                                                                                          // console.log('infinte loop avoided')
                                                                                                          return


                                                                                                      }


                                                                                                      dev_obj.events = arguments[p_Ev_C_1_i]


                                                                                                  }


                                                                                                  else if(   typeof(   arguments[p_Ev_C_1_i]   ) == 'function'   ){


                                                                                                      dev_obj.listener = arguments[p_Ev_C_1_i]

                                                                                                      
                                                                                                  }     


                                                                                              }                                                                                                              
                                                                                              debugger;
                                                                                              dev_obj.listener_type = typeof(   dev_obj.listener   )  

                                                                                              
                                                                                              if(   dev_obj.listener_type.match(   'function'   ) != -1  ){
                                                                                                  // three ways setImmediate, setInterval or process.nextTick
                                                                                                  p_Ev_C.ev_rgs_obj.newListener_interval.events               = dev_obj.events
                                                                                                  p_Ev_C.ev_rgs_obj.newListener_interval.listener             = dev_obj.listener  


                                                                                                  if(   !Object.isSealed(   p_Ev_C.ev_rgs_obj.newListener_interval.ev_metadata   )   ){


                                                                                                      p_Ev_C.ev_rgs_obj.newListener_interval.ev_metadata.events   = dev_obj.events
                                                                                                      p_Ev_C.ev_rgs_obj.newListener_interval.ev_metadata.listener = dev_obj.listener  


                                                                                                  }


                                                                                                  p_Ev_C.ev_rgs_obj.newListener_interval.actual   = setInterval(() =>{
                                                                                                      

                                                                                                      if(   p_Ev_C.ev_rgs._events[p_Ev_C.ev_rgs_obj.newListener_interval.events] !=undefined   ){


                                                                                                          p_Ev_C.ev_rgs.off(   p_Ev_C.ev_rgs_obj.newListener_interval.events    ,   p_Ev_C.ev_rgs_obj.newListener_interval.listener    )
                                                                                                          clearInterval(   p_Ev_C.ev_rgs_obj.newListener_interval.actual   )
                                                                                                      
                                                                                                      }  

                                                                                                      
                                                                                                      console.log("am I trying to clear it ")
                                                                                                  },0)
                                                                                                  Object.seal(   p_Ev_C.ev_rgs_obj.newListener_interval.ev_metadata   )

                                                                                              }    
                                                                                              
                                                                                              
                                                                                              const p_Ev_C_1_i_n_m = p_Ev_C_node_mode(p_Ev_C_n_m_t_r["p_Ev_C_1_i_n_m"],[[      
                                                                                                                            'newlist_broken',  //FUNCTIONALITY: when the API cannot remove new events that the dev is trying to attach
                                                                                                                            function(){        
                                                                                                                                console.log(arguments)
                                                                                                                                console.log(dev_obj)
                                                                                                                                console.log(   "ridiculous"   )   
                                                                                                                                debugger;                  
                                                                                                                            }],  
                                                                                                                            ['prevent',  
                                                                                                                            function(){                         
                                                                                                                            }],                                                                                                                                                                                                                        
                                                                                                                      ])
                                                                                              p_Ev_C_1_i_n_m.emit(   p_Ev_C_node_mode_threads[1][0],p_Ev_C_node_mode_threads[1][1]  )         
                                                                                          }                                                                                                                                                    
                                                  // p_Ev_C.ev_rgs.on(   'removeListener',  p_Ev_C.ev_rgs_obj.removeListener_default)
                                                  p_Ev_C.ev_rgs.on(   'newListener' , p_Ev_C.ev_rgs_obj.newListener_default)  
                                                  // delete p_Ev_C.ev_rgs.__proto__.addListener   
                                                  // delete p_Ev_C.ev_rgs.__proto__.on    
                                                  // delete p_Ev_C.ev_rgs.__proto__.once   
                                                  // delete p_Ev_C.ev_rgs.__proto__.prependListener   
                                                  // delete p_Ev_C.ev_rgs.__proto__.prependOnceListener                                                                                                                                                                                           

                                            },                                                            
                                          },
                          node_mode_async:{
                                              'no_const_fn'                 :'sync',
                                              'const_fn_new_help'           :'sync',
                                              'use_class_stable'            :'sync',
                                              'use_setInterval_unstable'    :'sync',
                                              'C'                           :'async',
                                              'D'                           :'async',
                                          },  
                       node_mode_metadata: p_Ev_C.dev_obj.p_Ev_C_listen_handle_n_m,
                               custom_dev:{
                                            gen_ans:'no'
                                          }                                                                                                                                                                                
                                    }            
            const p_Ev_C_listen_handle_n_m = p_Ev_C_node_mode(   p_Ev_C_listen_handle_n_m_obj   )         
            p_Ev_C_listen_handle_n_m.emit(   p_Ev_C_node_mode_threads[0][0],p_Ev_C_node_mode_threads[0][1]   )
            Object.seal(   p_Ev_C   )
            // cant use _events.newListener.listener or .rawListeners(   'newListener'   ) to take it out from  in a  REPL
            // cant take out in the module itself
            // p_Ev_C.ev_rgs.on("a", function(){console.log(3)})              
            return p_Ev_C
}

module.exports = p_Ev_C_constructor