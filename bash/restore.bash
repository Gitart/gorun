#!/usr/bin/env bash

for file in rethinkdb_d/*.tar
do
   echo $file
   rethinkdb restore $file;
done