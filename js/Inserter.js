
/*
This Code was written by Samuel Brecht (Kleefuchs) in 2024 pls contact him if you want to use it.
*/


class Inserter {
    ignoreNotPresent = false;
    entries = new Map();

    _error(...data) {
        console.error("INSERTION ERROR: " + data);
    }

    _warn(...data) {
        console.warn("INSERTION WARNING: " + data);
    }
    
    _info(...data) {
        console.info("INSERTION INFO: " + data);
    }


    /**
     * Adds an entry to the map which will be added to the document when insert is called.
     * Takes a name which stands for the element name atribute.
     * Also takes a text which will be inserted into the element.
    **/
    set(name, text) {
      this.entries.set(name, text);
      this._info(name + " has been set");
    }
    /**
     * Returns the entry with the specified name.
    **/
    get(name) {
        this.entries.get(name);
    }
    /**
     * Deletes the entry whit the specified name from the map.
    **/
    delete(name) {
        this.entries.delete(name);
    }
    /**
     * Inserts all of the entries into the document.
    **/
    insert() {
        this._info('Insertion Progress started');
        this.entries.forEach((text, name) => {
            this._info('Started insertion of "' + name + '"');
            //Getting all elements with a certain name within the document
            var elementsWithName = document.getElementsByName(name);
            var successfulInsertions = 0;
            var totalInsertions = elementsWithName.length;
            //Warns the user about there not being any elements with the certain name inside of the document
            if((elementsWithName.length<1) && (this.ignoreNotPresent==false)) {
                this._error('There are no elements in the document with the name atribute of "' + name + '"');
            }
            //Loops through the elements and sets the innerHTML to the specified text
            elementsWithName.forEach(element => {
                element.innerHTML = text;
                successfulInsertions++;
            });
            //Tells the user when all of the insertions were successful or warns them when at least some where not
            if(totalInsertions===successfulInsertions) {
                this._info('All insertions of "' + name + '" were successful');
            } else {
                this._error(successfulInsertions + ' of ' + totalInsertions + ' were successful');
            }
        });
    }
}
