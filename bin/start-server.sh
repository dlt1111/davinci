#!/bin/bash

#start server

current_dir=`pwd`
script_dir=$(cd `dirname $0`; pwd)
cd $script_dir
java -cp ../davinci-server_2.11-0.2.1-SNAPSHOT.jar:../lib/* edp.davinci.DavinciStarter &
