if [ $# -le 3 ]
then
  
  echo "List of arguments:"
  for arg in $@
  do
    echo "$arg"
  done
elif [ $# -ge 3 ]
then
	echo $1
	echo $2
	echo $3
fi
if [ $# -le 0 ]
then
  echo "No argument provided to the script."
fi
