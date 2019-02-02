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
class p_Ev_C_Emitter extends p_Ev_C_EventEmitter {

  constructor(){
    super()  
  }

  get  on(){
      console.log('cant do it ')
  }

                                    // delete p_Ev_C.ev_rgs.__proto__.addListener   
                                    // delete p_Ev_C.ev_rgs.__proto__.on    
                                    // delete p_Ev_C.ev_rgs.__proto__.once   
                                    // delete p_Ev_C.ev_rgs.__proto__.prependListener   
                                    // delete p_Ev_C.ev_rgs.__proto__.prependOnceListener      
}
e = new p_Ev_C_Emitter()
debugger

// process_uncaughtException.message
    //message to for dev to tell self when the process completes everything
//  process_uncaughtException.open_items 
    // the open items that the API needs to have a method to close
// process_uncaughtException.handler
        //the  uncaughtException handler that uses the provided function to close the objects, it should be considered whether defaults are applied
        // in case the developer forgets to write a close method for it
            // the dev must write a function and assoicate the name of the type to the object they are trying to close
            // if slighty different operations are needed use a node_mode emitter, provide slighty differnent name
                // future implementations will decide what the developer wants to do here but to coventinonal js if your rewrite a function on the same
                // object propety you can bypass the problem and use the same name for different specifics of closing the same object type

// push the opened object and the type to be proerly closed object
// how you use it is that the closing function is added as a method to the object and as it goes through open items its has a type, 
    // the type name is the name of the function to close the open object
// the client using this plugin should create the object for the end function to receive
// make a check if the dev tries to register a fuction open object type twice 
    // tell dev they cannot do this and this plugin will use the last extension if they want to be innovative so they can apply different rules 
    // to different objects

// think about how this handles async and sync

// process_Event_Control     // leave commented code commented
    // a dynamic dev process plugin handler
// s_c
    // events for the  process objecct to bind listeners to 


// p_Ev_C.ev_rgs event_register
    // is how the developer will use the object to change their specific funcitons

    // p_Ev_C.ev_rgs_obj
      // helps ee ev_rgs do it job


    // p_Ev_C.ev_rgs.on(   'removeListener'  p_Ev_C.ev_rgs_obj.removeListener_default)
      //should presever only the given listenerns make sure newListener does not intefere here

    // p_Ev_C.ev_rgs.on(   'newListener'  p_Ev_C.ev_rgs_obj.newListener_default)

            //use to prevent the developer from making accidenal new Listeners and breaking the anything functionality, most likely
            // p_Ev_C.ev_rgs_obj.newListener_rgs used to help the ee remove the accident event when its fully attached

    //if you leave these functions as constants devs have greater access and can destroy tjem        

     
var process_Event_Control = {}
var p_Ev_C = {}
p_Ev_C.s_c = {} //figure out how to protect this
p_Ev_C.ev_rgs = new p_Ev_C_Emitter()
p_Ev_C.ev_rgs_obj = {}
const p_Ev_C_listen_handle_n_m = p_Ev_C_node_mode({   


                          n_m:p_Ev_C_n_m_t_r['p_Ev_C_listen_handle_n_m'],
                        codes:[      
                              ['no_const_fn',
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
                              }],
                              ['const_fn_new_help',
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
                              }],  
                              ['const_fn_unsafe',
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
                                    p_Ev_C.ev_rgs_obj.newListener_default = function(   events,listener   ){        
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
                                                                                console.log(   p_Ev_C.ev_rgs   )                                                                                
                                                                                console.log(   dev_obj.events,p_Ev_C.ev_rgs.rawListeners(   dev_obj.events   )   )
                                                                                console.log(   typeof(   p_Ev_C.ev_rgs.rawListeners(   dev_obj.events   )   )   )
                                                                                console.log(   typeof(   dev_obj.listener   )   )
                                                                                dev_obj.listener_type = typeof(   dev_obj.listener   )  

                                                                                
                                                                                if(   dev_obj.listener_type.match(   'function'   ) != -1  ){

                                                                                        
                                                                                        p_Ev_C.ev_rgs.off(   'removeListener',p_Ev_C.ev_rgs_obj.removeListener_default   )
                                                                                        p_Ev_C.ev_rgs.off(   dev_obj.events,dev_obj.listener   )                                                                                                                                                                                     
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
                                                                            }                                                                                                                                                    
                                    p_Ev_C.ev_rgs.on(   'removeListener',  p_Ev_C.ev_rgs_obj.removeListener_default)
                                    p_Ev_C.ev_rgs.on(   'newListener' , p_Ev_C.ev_rgs_obj.newListener_default)  
                                    // delete p_Ev_C.ev_rgs.__proto__.addListener   
                                    // delete p_Ev_C.ev_rgs.__proto__.on    
                                    // delete p_Ev_C.ev_rgs.__proto__.once   
                                    // delete p_Ev_C.ev_rgs.__proto__.prependListener   
                                    // delete p_Ev_C.ev_rgs.__proto__.prependOnceListener                                                                                                                                                                                           

                              }],                              
                              ['C',
                              function(){
                                  //async version of above     
                                  // my problem here is that the newListener listener beats the on events in the async event so it cannot remove
                                  // added listneners                                         
                              }],  
                              ['D',
                              function(){
                                  //async version of above                                              
                              }],
                              ],
              node_mode_async:{
                                  'no_const_fn'      :'sync',
                                  'const_fn_new_help':'sync',
                                  'const_fn_unsafe'  :'sync',
                                  'C'                :'async',
                                  'D'                :'async'
                              }                                                                                                                                                                 
                        }) 
debugger;
p_Ev_C_listen_handle_n_m.emit(   p_Ev_C_node_mode_threads[0][0],p_Ev_C_node_mode_threads[0][1]   )
// cant use _events.newListener.listener or .rawListeners(   'newListener'   ) to take it out from  in a  REPL
// cant take out in the module itself
// p_Ev_C.ev_rgs.off(   'newListener',p_Ev_C.ev_rgs.rawListeners(   'newListener'   )   )
debugger;
p_Ev_C.ev_rgs.on("a", function(){console.log(3)})     
Object.seal(   p_Ev_C   )
module.exports = p_Ev_C
// process.exit() 
// process_uncaughtException.message = ''
// process_uncaughtException.open_items = []
// process_uncaughtException.handler = function(   dev_obj   ){
//     open_items  =  dev_obj.open_items               
//     process.on('exit',(code) =>{
//         console.log(   process_uncaughtException.message,code   )    
//         Error.stack != undefined ? console.log(Error.stack) : console.log('trying to show you the error')
//     })    
//     for (var open_items_i = open_items.length - 1; open_items_i >= 0; open_items_i--) {
//         // console.log(open_items[open_items_i][1])

//         if(   process_uncaughtException[open_items[open_items_i][0]]!= undefined   ){


//             process_uncaughtException[open_items[open_items_i][0]](   open_items[open_items_i][1]   )


//         }    


//         else{


//             console.log(   'the open object assoicated with' + open_items[open_items_i][1]   + ' a ' + open_items[open_items_i][0] + 'was left open, \
//                 close this yourself, to \
//                 avoid this in the future register the open object type as the function name to this object and it must be exact ')


//         }      


//     }
//     dev_obj.exit_callback() 
// }       

// process.on('uncaughtException',(err)=>{
//     console.error(   err   )
//     process_uncaughtException.handler({
//                                         open_items: process_uncaughtException.open_items,
//                                         exit_callback: function(){process.exit()}
//                                       })
// })


// module.exports = process_uncaughtException
