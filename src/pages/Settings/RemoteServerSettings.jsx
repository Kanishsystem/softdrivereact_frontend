import React from 'react'
import { SmartSoftInput } from 'soft_digi';
const RemoteServerSettings = () => {

  const remortes = [
    { arowup: <i class="fa fa-line-chart p-2" aria-hidden="true"></i>, arowright: <i class="fa fa-share p-2" aria-hidden="true"></i>, trashbin: <i class="fa fa-trash p-2 has-text-danger" aria-hidden="true"></i> },
    { arowup: <i class="fa fa-line-chart p-2" aria-hidden="true"></i>, arowright: <i class="fa fa-share p-2" aria-hidden="true"></i>, trashbin: <i class="fa fa-trash p-2 has-text-danger" aria-hidden="true"></i> },
    { arowup: <i class="fa fa-line-chart p-2" aria-hidden="true"></i>, arowright: <i class="fa fa-share p-2" aria-hidden="true"></i>, trashbin: <i class="fa fa-trash p-2 has-text-danger" aria-hidden="true"></i> },
  ]
  return (
    <div className='RemoteServerSettings'>
      <div className='columns  is-multiline  '>
        <div className='column  is-multiline  is-flex card is-8'>
          {remortes.map((item) =>
            <div className='column  is-multiline  card is-4 '>
              <div className='is-flex is-justify-content-end'>
                {item.arowup}
                {item.arowright}
                {item.trashbin}
              </div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjGm1SHuZZCBX1vmKw3-YAH1uJWaVAww9M0SQf4n_qnHhcIKgyQBIh27_uRLkpIJYWHs&usqp=CAU" className="logo" />
              <i class="fa fa-eyedropper is-flex is-justify-content-end p-2" aria-hidden="true"></i>
            </div>
          )}
        </div>
        <div className='column  card is-4'>
          <div className='card p-5'>

            <SmartSoftInput label="Server Url" className="box-model" id="boxmodel" />
            <SmartSoftInput label="Server Way " />
            <SmartSoftInput label="Server file" />

            <div className="btnproperty is-flex is-justify-content-end">
              <span className='pr-6 pt-3'><a href='##'>Test</a></span>
              <span><button class="button is-link">Add servar</button></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RemoteServerSettings