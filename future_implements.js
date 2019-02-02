for                         "process_Event_Control.js":[
                            ['test',      'const_fn_unsafe'            ],

                        must dicuss with nodejs team so API can actually add the listnener before firing the newListener event
                        after p_Ev_C.ev_rgs = new p_Ev_C_Emitter() 

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
                                    p_Ev_C.ev_rgs.snufjet(   'removeListener',  p_Ev_C.ev_rgs_obj.removeListener_default)
                                    p_Ev_C.ev_rgs.snufjet(   'newListener' , p_Ev_C.ev_rgs_obj.newListener_default)  