import React from 'react'
// Note props is Object

// props store values of card component

// Note2: instead of writing props we use "{}" (de-structure of object we have seen in Javascript) e.g:- {userName} insted of props.

// function card(props) {
//     console.log('props',props);
//     console.log('userNamae:',props.userName);
// recommendend bcz easy way
function card({userName}) {
    console.log('props',{});
    console.log('userNamae:',userName);
    // 

  return (
    <div>
      <div className="w-60 h-60 rounded-xl mb-3 align-middle">
        <img
          src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
          alt="Giphy"
          className="rounded-t-xl"
        />
        <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10">
          <h1 className="font-bold  font-mono  text-xl">{userName}</h1>
        </div>
      </div>
    </div>
  )
}

export default card
