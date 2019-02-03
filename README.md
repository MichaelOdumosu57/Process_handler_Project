process_Event_Control     
    a dynamic process plugin handler
s_c
    events for the  process objecct to bind listeners to 


p_Ev_C.ev_rgs event_register
    is how the developer will use the object to change their specific funcitons

    p_Ev_C.ev_rgs_obj
      helps ee ev_rgs do it job


    optional dev restictions
      p_Ev_C.ev_rgs.on(   'removeListener'  p_Ev_C.ev_rgs_obj.removeListener_default)
        should presever only the given listenerns make sure newListener does not intefere here

      p_Ev_C.ev_rgs.on(   'newListener'  p_Ev_C.ev_rgs_obj.newListener_default)

              use to prevent the developer from making accidenal new Listeners and breaking the anything functionality, most likely
                  if  p_Ev_C_listen_handle_n_m >>  const_fn_new_help is emitted
                  p_Ev_C.ev_rgs_obj.newListener_rgs used to help the ee remove the accident event when its fully attached

              if p_Ev_C_listen_handle_n_m >>  use_setInterval is emitted
              p_Ev_C.ev_rgs_obj.newListener_interval = {};
              contains events, listener, actual      its for setInterval that loses track of what its supposed to be watching  
                        .ev_metadata = {}
                        contains events and listener this is sealed so the internal API cannot break its intended functionlaity by removing it s eyes

      implemet a class and reroute desired functionality the developer can evenutally acess the functionality if they know where to look
        this is in const_fn_unsafe


    if you leave these functions as constants devs have greater access and can destroy them    




p_Ev_C_listen_handle_n_m

 use_class_stable

     Benefits
         block all use of trying to modify the listener amount to the ee 

     Disadvantages
         its unknown if more uses of the ee uses the methods which the class is rerouted, 
           so far to achieve any functionlaity enough of these methods are safe to use

     Plans
         if rerouted methods are called by the internal API  the class should reroute to allow access

 use_setInterval_unstable

     Benefits
         does not reroute internal prototype methods

     Disadvantages
         so far it can properly handle just one ADDED listeners even as a third party module, further attacks will break it 
         the implementation is async-based if the outer choice thread is called for sync use this presents problems
             its already defaulted for sync use beucase of the sync nature of process
                 async use was not tested but refer to the n_m Emitter given node_mode_async and report results?
         causes general confusion in the internal API if it tries to handle more
           with sync it takes many executions before it can even remove it ev with the time value = 0, so hackers can take adavatange of this

     Plans
         allow it to handle a variable amount of listeners amount modification        


    custom_dev parameter
    {
        gen_ans:'total'
    }
    allowed for free access for reimpelemtation

    to apply
    const p_Ev_C = require('./process_Event_Control.js')  
    try_it = p_Ev_C(   p_Ev_C_listen_handle_n_m :{your node_mode_metadata here}  )


    p_Ev_i
        this is the event  makes the emitter for the process specfic event and handles many things so the developer does not have to
            future support will be provided to remove process, or the dev can hold the function in a constant and remove any time
            similar to n_m_E where can add listeners any where after the required arguments exist

            the_argument_template =
            {
            'event':{
                          'simple_handler':{
                                                message  :{
                                                            text:'sync operations before I am ready to finish here',
                                                            log: 'none'
                                                          }
                                                params:{
                                                          the_initer:0,
                                                          more_items: {...}
                                                        },
                                                execute:function(){
                                                    dev_obj = arguments[2][1]
                                                    close_obj(   more_items   )
                                                    cosnole.log('everything closed was not that convieniet')
                                                }
                                                sync:'sync',
                                                append_type:once

                                            }
                      }  
              }  

              use
              try_it.ev_rgs.emit(   'p_Ev_i',the_argument_template   )

              to resuse functions declare them in a constant
              and to provide more process event handler parameters for the same event copy and add simple handler template to the event object
              to provide for several events, copy and paste the events temple in an object

              event
                  the name of the process event, examples are exit and uncaughtException refer to the nodejs documentation for more examples

              simple handler,
                  its reall the listnener metadata for the process event thats all

              message
                  text: the message you want to provide when the listener is going to be executed <string>
                  log: where to actually provide the values, default = none values, log, warn,error,none

              params:
                  args for the listnener

              execute:
                  the actual listener 
                  the parameters you have provided for the listeners are in arguments[2][1], everything else is a by product or creating the listnener

              sync:whether the listnener is done through setInterval, process.nextTick or by sync default sync

              append_type: how to append the listeners, default once, because the dangerous nature of working with process


NOTE: when working with process terminating events such as uncaughtException or a SIGNAL  make sure you take care of what the API
      uses as well as OS related process handling this is important altough considered Event_Control does not guarantee proper cleanup              



to see it in practice

const node_mode_threads_files = {
                        "template.js":[
                            ['test',      'emit_listener'         ],                            
                          ],
                        "process_Event_Control.js":[
                            ['test',      'use_setInterval_unstable'   ],
                            ['test',      'prevent'                    ]                            
                          ]                           
                    }   


to see it add listeners by calling a method
 node_mode_threads_files = {
                        "template.js":[
                            ['test',      'call_method'                 ],                            
                          ],
                        "process_Event_Control.js":[
                            ['test',      'use_class_stable'              ],
                            ['test',      'prevent'                       ]                            
                          ]                           
                    }

make sure 
                           node_mode_args:{
                                              appender:'method'
                                          }
                            for p_Ev_C_listen_handle_n_m is applied                    

to see the process_Event_Control reject the rawListener attack

const node_mode_threads_files = {
                        "template.js":[
                            ['test',      'use_raw'         ],                            
                          ],
                        "process_Event_Control.js":[
                            ['test',      'use_class_stable'           ],
                            ['test',      'prevent'                    ]                            
                          ]                                 
                    }



to see the process_Event_Control reject the exact listener copy props attack

const node_mode_threads_files = {
                        "template.js":[
                            ['test',      'use_props'         ],                            
                          ],
                        "process_Event_Control.js":[
                            ['test',      'use_class_stable'           ],
                            ['test',      'prevent'                    ]                            
                          ]                                 
                    }




to load the  process_Event_Control module only 

const node_mode_threads_files = {
                        "template.js":[
                            ['test',      'just_require'         ],                            
                          ],
                        "process_Event_Control.js":[
                            ['test',      'use_class_stable'           ],
                            ['test',      'prevent'                    ]                            
                          ]                                
                    }                                      

                 

to see it take time to reject one added listener

const node_mode_threads_files = {
                        "template.js":[
                            ['test',      'add_listener'         ],                            
                          ],
                        "process_Event_Control.js":[
                            ['test',      'use_setInterval_unstable'   ],
                            ['test',      'prevent'                    ]                            
                          ]                           
                    }                    


