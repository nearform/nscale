# npm install latest versions

for dir in $(ls -d */)
do 
  cd $dir
  echo $dir
  npm install
  echo ------------------------------
  cd ..
done

