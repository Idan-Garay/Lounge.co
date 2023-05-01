import React from 'react'
import "./App.scss"

// creating components -> data needed (state management -> backend)`

const App = () => {
  return (
    <div className='app'>
      <aside className='message-menu'>
        <div className="menu-left">
          <div className="menu-top">
            <div className="icon-space active">
            </div>

            <div className="icon-space">
            </div>

            <div className="icon-space">
            </div>

            <div className="icon-space">
            </div>
          </div>

          <div className="menu-bottom">

            <div className="icon-space active">
            </div>
          </div>
        </div>

        <div className="menu-right">
          <div className="menu-header">
            <p>Chats</p>
          </div>

          <input type="text" name="" id="" className="menu-search" placeholder="Search (⌘K)" />

          <div className="menu-body">

          </div>
        </div>
      </aside>
      <main className='message-window'>
        <div className="window-header b">
          
        </div>

        <div className="window-body b">

        </div>

        <div className="window-input b">

        </div>
      </main>
    </div>
  )
}

export default App