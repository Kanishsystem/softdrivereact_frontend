import React from 'react'
import { SmartSoftInput, SmartSoftSelect } from 'soft_digi'
import GeneralSettings from './FileSettings/GeneralSettings'
import ExtensionSettings from './FileSettings/ExtensionSettings'
import FileEditSetings from './FileSettings/FileEditSetings'
import ShareSettings from './FileSettings/ShareSettings'


const FileSettings = () => {
  return (
  <>
  <div className='container'>
    <div key={"key-1"} className='columns is-multiline'>
      <div  key={"key-2"}  className="column is-6"><GeneralSettings /></div>
      <div  key={"key-3"}  className="column is-6"><ExtensionSettings /></div>
      <div  key={"key-4"}  className="column is-6"> <FileEditSetings /></div>
      <div  key={"key-5"}  className="column is-6"><ShareSettings /></div>
    </div>
  </div>
  </>

    
  )
}

export default FileSettings
