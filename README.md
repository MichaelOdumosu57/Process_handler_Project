to see the process_Event_Control reject the rawListener attack

const node_mode_threads_files = {
                        "template.js":[
                            ['test',      'use_raw'         ],                            
                          ],
                        "process_Event_Control.js":[
                            ['test',      'newlist_broken'         ],                            
                          ],                           
                    }



to see the process_Event_Control reject the exact listener copy props attack

const node_mode_threads_files = {
                        "template.js":[
                            ['test',      'use_props'         ],                            
                          ],
                        "process_Event_Control.js":[
                            ['test',      'newlist_broken'         ],                            
                          ],                           
                    }




to load the  process_Event_Control module only 

const node_mode_threads_files = {
                        "template.js":[
                            ['test',      'just_require'         ],                            
                          ],
                        "process_Event_Control.js":[
                            ['test',      'newlist_broken'         ],                            
                          ],                           
                    }                                      