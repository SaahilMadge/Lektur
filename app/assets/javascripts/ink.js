var inkblob;

writefile = function(text) {
  console.log("Writing to "+inkblob.filename + "...");
  filepicker.write(inkblob, text, function(InkBlob) {
      console.log('write success');
    }, function(error) {
      console.log(error.toString());
    }
  );
}


filepicker.setKey("A3UKsLvhQj6x7lvSjJGWQz");

