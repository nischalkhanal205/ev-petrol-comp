/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ImportChoice() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className='flex justify-center m-5'>
    <div className="container-sm bg-white shadow sm:rounded-lg ">
      <Switch.Group as="div" className="px-4 py-5 sm:p-6">
        <Switch.Label as="h3" className="text-lg leading-6 font-medium text-gray-900" passive>
         You are willing to import your desired EV ?
        </Switch.Label>
        <div className="mt-2 sm:flex sm:items-start sm:justify-between">
          <div className="max-w-xl text-sm text-gray-500">
            <Switch.Description>
              Check this box if you want to import your EV from India by yourself. If you do not want to import and buy it from the dealers in Nepal, leave it unchecked.
            </Switch.Description>
          </div>
          <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={classNames(
                enabled ? 'bg-green-600' : 'bg-gray-200',
                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  enabled ? 'translate-x-5' : 'translate-x-0',
                  'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                )}
              />
            </Switch>
          </div>
        </div>
      </Switch.Group>
    </div>
    </div>
  )
}
