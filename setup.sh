#!/bin/ash
echo "running....."


if [ -z "$BIOAGE_API" ]
then
    echo "not defined"
else 
    echo "defined $BIOAGE_API"
    echo "===start file===="
    cat /usr/share/nginx/html/assets/config.json
    echo "===original file===="
    sed -i -e "s|http://localhost:3001|$BIOAGE_API|g" /usr/share/nginx/html/assets/config.json
    sed -i -e "s|0.0.1|$TERELEASE|g" /usr/share/nginx/html/assets/config.json
    echo "===replaces===="
    cat /usr/share/nginx/html/assets/config.json
    echo "===finished===="
fi


echo "end"