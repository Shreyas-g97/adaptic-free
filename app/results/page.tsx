'use client'

import Navbar from '../components/Navbar';
import useStore from '../results';
import './results.css'

const Results: React.FC = () => {
  const results = useStore.useResultsStore(state => state.results);
  const objectives = results?.objectives;
  const endpoints = results?.endpoints;
  const estimands = results?.estimands;

  if (results === null) {
    return (
      <div>Loading...</div>
    );
  } else {
      return (
        <>
        <Navbar />
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div className="col-span-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Objectives</h3>
                {objectives.map((objective, index) => (
                    <div className="flex flex-col mb-10 w-[300px] h-[250px] group">
                      <div className="overflow-hidden group-hover:overflow-y-auto">
                        <h4 className="text-md font-semibold text-gray-900">Option #{index + 1}</h4>
                        <article className="mt-6">
                          {objective.response}
                        </article>
                      </div>
                    </div>
                ))}
              </div>
              <div className="col-span-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Endpoints</h3>
                {endpoints.map((endpoint) => (
                  <div className="flex flex-col mb-10 w-[300px] h-[250px] group">
                  <div className="overflow-hidden group-hover:overflow-y-auto">
                    <article className="mt-6">
                      {endpoint.response}
                    </article>
                  </div>
                </div>
                ))}
              </div>
              <div className="col-span-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Estimands</h3>
                {estimands.map((estimand) => (
                 <div className="flex flex-col mb-10 w-[300px] h-[250px] group">
                    <div className="overflow-hidden group-hover:overflow-y-auto">
                      <article className="mt-6">
                        {estimand.response}
                      </article>
                    </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </>
      )
    }
};

export default Results;
