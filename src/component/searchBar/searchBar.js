import React, {useState} from 'react';
import SearchBar from "material-ui-search-bar";

function searchBar(props){
    return(
        <div>
    <SearchBar
      SearchBar={() => console.log('SearchBar')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 900
      }}
    />
        </div>
    );
}