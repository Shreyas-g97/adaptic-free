'use client'

import Navbar from '../components/Navbar';
import useStore from '../results';
import './results.css'
import Sidebar from '../components/Sidebar';
import Loading from '../components/Loading';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import { HandThumbDownIcon } from '@heroicons/react/24/outline';
import { BookOpenIcon } from '@heroicons/react/24/solid';
import { IconButton } from '@material-tailwind/react';
import { useEffect, useState } from 'react';

const Results: React.FC = () => {
  const results = useStore.useResultsStore(state => state.results);
  const objectives = results?.objectives;
  const endpoints = results?.endpoints;
  const estimands = results?.estimands;
  const sources = results?.sources;

  const openSources = () => {
    window.open(sources[0], '_blank');
  }

  if (results === null) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
      return (
        <>
        <Navbar sidebar={true} />
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <div className="fixed left-0 md:block hidden">
              <Sidebar />
            </div>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 border-t border-gray-200 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div className="col-span-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Objectives</h3>
                {/* {objectives.map((objective: any, index: any) => (
                    <div className="flex flex-col mb-10 w-[300px] h-[250px]">
                      <h4 className="text-md font-semibold text-gray-900">Option #{index + 1}</h4>
                      <div className="overflow-hidden hover:overflow-y-auto">
                        <article className="mt-6">
                          {objective.text}
                        </article>
                      </div>
                      <div className='flex justify-end mt-2 opacity-0 hover:opacity-100'>
                        <IconButton variant='outlined'>
                          <HandThumbUpIcon className="h-5 w-5" />
                        </IconButton>
                        <IconButton variant='outlined'>
                          <HandThumbDownIcon className="h-5 w-5" />
                        </IconButton>
                      </div>
                    </div>
                ))} */}

                {/* Display Primary Objectives */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Option 1</h4>
                    <div className="flex flex-col mb-10 w-full md:w-[300px] h-[250px] group">
                      <div className="overflow-hidden group-hover:overflow-y-auto">
                        <article className="mt-6">
                          {objectives[0][0].text.split('\n').map((text: any, index: any) => (
                            <p key={index}>{text}</p>
                          ))}
                        </article>
                      </div>
                      <div className='flex justify-end mt-2 opacity-100'>
                        <IconButton variant='outlined'>
                          <HandThumbUpIcon className="h-5 w-5" />
                        </IconButton>
                        <IconButton variant='outlined'>
                          <HandThumbDownIcon className="h-5 w-5" />
                        </IconButton>
                        <IconButton variant='outlined' onClick={openSources}>
                          <BookOpenIcon className="h-5 w-5" />
                        </IconButton>
                      </div>
                    </div>
                </div>

                {/* Display Secondary Endpoints */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Option 2</h4>
                    <div className="flex flex-col mb-10 w-full md:w-[300px] h-[250px] group">
                      <div className="overflow-hidden group-hover:overflow-y-auto">
                        <article className="mt-6">
                          {objectives[1][0].text.split('\n').map((text: any, index: any) => (
                            <p key={index}>{text}</p>
                          ))}
                        </article>
                      </div>
                      <div className='flex justify-end mt-2 opacity-100'>
                        <IconButton variant='outlined'>
                          <HandThumbUpIcon className="h-5 w-5" />
                        </IconButton>
                        <IconButton variant='outlined'>
                          <HandThumbDownIcon className="h-5 w-5" />
                        </IconButton>
                        <IconButton variant='outlined' onClick={openSources}>
                          <BookOpenIcon className="h-5 w-5" />
                        </IconButton>
                      </div>
                    </div>
                </div>

                {/* Display Exploratory Endpoints */}
                <div>
                  <h4 className="text-lg font-semibold mb-2">Option 3</h4>
                    <div className="flex flex-col mb-10 w-full md:w-[300px] h-[250px] group">
                      <div className="overflow-hidden group-hover:overflow-y-auto">
                        <article className="mt-6">
                          {objectives[2][0].text.split('\n').map((text: any, index: any) => (
                            <p key={index}>{text}</p>
                          ))}
                        </article>
                      </div>
                      <div className='flex justify-end mt-2 opacity-100'>
                        <IconButton variant='outlined'>
                          <HandThumbUpIcon className="h-5 w-5" />
                        </IconButton>
                        <IconButton variant='outlined'>
                          <HandThumbDownIcon className="h-5 w-5" />
                        </IconButton>
                        <IconButton variant='outlined' onClick={openSources}>
                          <BookOpenIcon className="h-5 w-5" />
                        </IconButton>
                      </div>
                    </div>
                </div>
              </div>
              <div className="col-span-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Endpoints</h3>
                {/* {endpoints.map((endpoint: any) => (
                  <div className="flex flex-col mb-10 w-[300px] h-[250px] group">
                  <div className="overflow-hidden group-hover:overflow-y-auto">
                    <article className="mt-6">
                      {endpoint.text}
                    </article>
                  </div>
                  <div className='flex justify-end mt-2 opacity-0 hover:opacity-100'>
                        <IconButton variant='outlined'>
                          <HandThumbUpIcon className="h-5 w-5" />
                        </IconButton>
                        <IconButton variant='outlined'>
                          <HandThumbDownIcon className="h-5 w-5" />
                        </IconButton>
                      </div>
                </div>
                ))} */}

              {/* Display Primary Endpoints */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Option 1</h4>
                    <div className="flex flex-col mb-10 w-full md:w-[300px] h-[250px] group">
                      <div className="overflow-hidden group-hover:overflow-y-auto">
                        <article className="mt-6">
                          {endpoints[0][0].text.split('\n').map((text: any, index: any) => (
                            <p key={index}>{text}</p>
                          ))}
                        </article>
                      </div>
                      <div className='flex justify-end mt-2 opacity-0 hover:opacity-100'>
                        <IconButton variant='outlined'>
                          <HandThumbUpIcon className="h-5 w-5" />
                        </IconButton>
                        <IconButton variant='outlined'>
                          <HandThumbDownIcon className="h-5 w-5" />
                        </IconButton>
                      </div>
                    </div>
                </div>

                {/* Display Secondary Endpoints */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Option 2</h4>
                    <div className="flex flex-col mb-10 w-full md:w-[300px] h-[250px] group">
                      <div className="overflow-hidden group-hover:overflow-y-auto">
                        <article className="mt-6">
                          {endpoints[1][0].text.split('\n').map((text: any, index: any) => (
                            <p key={index}>{text}</p>
                          ))}
                        </article>
                      </div>
                      <div className='flex justify-end mt-2 opacity-0 hover:opacity-100'>
                        <IconButton variant='outlined'>
                          <HandThumbUpIcon className="h-5 w-5" />
                        </IconButton>
                        <IconButton variant='outlined'>
                          <HandThumbDownIcon className="h-5 w-5" />
                        </IconButton>
                      </div>
                    </div>
                </div>

                {/* Display Exploratory Endpoints */}
                <div>
                  <h4 className="text-lg font-semibold mb-2">Option 3</h4>
                    <div className="flex flex-col mb-10 w-full md:w-[300px] h-[250px] group">
                      <div className="overflow-hidden group-hover:overflow-y-auto">
                        <article className="mt-6">
                          {endpoints[2][0].text.split('\n').map((text: any, index: any) => (
                            <p key={index}>{text}</p>
                          ))}
                        </article>
                      </div>
                      <div className='flex justify-end mt-2 opacity-0 hover:opacity-100'>
                        <IconButton variant='outlined'>
                          <HandThumbUpIcon className="h-5 w-5" />
                        </IconButton>
                        <IconButton variant='outlined'>
                          <HandThumbDownIcon className="h-5 w-5" />
                        </IconButton>
                      </div>
                    </div>
                </div>
              </div>
              <div className="col-span-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Estimands</h3>
                {/* {estimands.map((estimand: any) => (
                  <div className="flex flex-col mb-10 w-[300px] h-[250px] group">
                  <div className="overflow-hidden group-hover:overflow-y-auto">
                    <article className="mt-6">
                      {estimand.text}
                    </article>
                  </div>
                  <div className='flex justify-end mt-2 opacity-0 hover:opacity-100'>
                        <IconButton variant='outlined'>
                          <HandThumbUpIcon className="h-5 w-5" />
                        </IconButton>
                        <IconButton variant='outlined'>
                          <HandThumbDownIcon className="h-5 w-5" />
                        </IconButton>
                      </div>
                </div>
                ))} */}
                {/* Display Primary Estimands */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Option 1</h4>
                    <div className="flex flex-col mb-10 w-full md:w-[300px] h-[250px] group">
                      <div className="overflow-hidden group-hover:overflow-y-auto">
                        <article className="mt-6">
                          {estimands[0][0].text.split('\n').map((text: any, index: any) => (
                            <p key={index}>{text}</p>
                          ))}
                        </article>
                      </div>
                      <div className='flex justify-end mt-2 opacity-0 hover:opacity-100'>
                        <IconButton variant='outlined'>
                          <HandThumbUpIcon className="h-5 w-5" />
                        </IconButton>
                        <IconButton variant='outlined'>
                          <HandThumbDownIcon className="h-5 w-5" />
                        </IconButton>
                      </div>
                    </div>
                </div>

                {/* Display Secondary Endpoints */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Option 2</h4>
                    <div className="flex flex-col mb-10 w-full md:w-[300px] h-[250px] group">
                      <div className="overflow-hidden group-hover:overflow-y-auto">
                        <article className="mt-6">
                          {estimands[1][0].text.split('\n').map((text: any, index: any) => (
                            <p key={index}>{text}</p>
                          ))}
                        </article>
                      </div>
                      <div className='flex justify-end mt-2 opacity-0 hover:opacity-100'>
                        <IconButton variant='outlined'>
                          <HandThumbUpIcon className="h-5 w-5" />
                        </IconButton>
                        <IconButton variant='outlined'>
                          <HandThumbDownIcon className="h-5 w-5" />
                        </IconButton>
                      </div>
                    </div>
                </div>

                {/* Display Exploratory Endpoints */}
                <div>
                  <h4 className="text-lg font-semibold mb-2">Option 3</h4>
                    <div className="flex flex-col mb-10 w-full md:w-[300px] h-[250px] group">
                      <div className="overflow-hidden group-hover:overflow-y-auto">
                        <article className="mt-6">
                          {estimands[2][0].text.split('\n').map((text: any, index: any) => (
                            <p key={index}>{text}</p>
                          ))}
                        </article>
                      </div>
                      <div className='flex justify-end mt-2 opacity-0 hover:opacity-100'>
                        <IconButton variant='outlined'>
                          <HandThumbUpIcon className="h-5 w-5" />
                        </IconButton>
                        <IconButton variant='outlined'>
                          <HandThumbDownIcon className="h-5 w-5" />
                        </IconButton>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      )
    }
};

export default Results;
