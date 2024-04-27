// // src/pages/projects/NewProject.tsx

// // First we will import Dialog and Transition component from '@headlessui/react'
// import { Dialog, Transition } from "@headlessui/react";
// // Next we will import Fragment and useState component from 'react'
// import { Fragment, useState } from "react";
// import { API_ENDPOINT } from "../../config/constants";
// import { useForm, SubmitHandler } from "react-hook-form";

// const NewProject = () => {
//   // Then we will use useState hook to handle local state for dialog component
//   const [isOpen, setIsOpen] = useState(false);
//   // Then we add the openModal function.
//   // If you don't know, Modal and Dialog are almost same thing.
//   const openModal = () => {
//     setIsOpen(true);
//   };
//   // Then we add the closeModal function
//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   // We will define a local component state using useState hook to keep the
//   // name value.
//   // const [name, setName] = useState("");

//   type Inputs = {
//     name: string;
//   };

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Inputs>();

//   // We will define a handleSubmit function to process form data on submission
//   const onSubmit: SubmitHandler<Inputs> = async (data) => {
//     // The event.preventDefault() will prevent the page to refresh on form submission
//     // event.preventDefault();
//     // Next, we will destructure the data object to access name field value
//     const { name } = data;
//     console.log("Form submitted");
//     console.log("Project name:", name);
//     // Then, I'll obtain the token from local storage
//     const token = localStorage.getItem("authToken") ?? "";
//     // Next, I'll make a POST request using fetch, to the API endpoint
//     try {
//       const response = await fetch(`${API_ENDPOINT}/projects`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ name }),
//       });
//       // If response is not OK, in that case I'll throw an error.
//       if (!response.ok) {
//         throw new Error("Failed to create project");
//       }
//       // Next, I'll extract the response body as JSON data
//       const data = await response.json();
//       // Let's print the data in console
//       console.log(data);
//       // Dialogue 1: For that, at the end of the try block, I'll call the `setIsOpen` function and set the value to `false` to close the modal.
//       setIsOpen(false);
//     } catch (error) {
//       // And in catch block, I'll print the error in console.
//       console.error("Operation failed:", error);
//     }
//   };

//   // In the return statement, we will use the code for modal
//   // that we've obtained from https://headlessui.com/react/dialog

//   return (
//     <>
//       <button
//         type="button"
//         onClick={openModal}
//         className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
//       >
//         New Project
//       </button>
//       <Transition appear show={isOpen} as={Fragment}>
//         <Dialog as="div" className="relative z-10" onClose={closeModal}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-25" />
//           </Transition.Child>
//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex min-h-full items-center justify-center p-4 text-center">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//               >
//                 <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all ">
//                   <Dialog.Title
//                     as="h3"
//                     className="text-lg font-medium leading-6 text-gray-900"
//                   >
//                     Create new project
//                   </Dialog.Title>
//                   <div className="mt-2">
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                       <input
//                         type="text"
//                         placeholder="Enter project name..."
//                         autoFocus
//                         {...register("name", { required: true })}
//                         className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
//                           errors.name ? "border-red-500" : ""
//                         }`}
//                       />
//                       {errors.name && <span>This field is required</span>}
//                       <button
//                         type="submit"
//                         className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//                       >
//                         Submit
//                       </button>
//                       <button
//                         type="submit"
//                         onClick={closeModal}
//                         className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//                       >
//                         Cancel
//                       </button>
//                     </form>
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>
//     </>
//   );
// };
// export default NewProject;

// src/context/projects/actions.ts
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm, SubmitHandler } from "react-hook-form";
// First I'll import the addProject function
import { addProject } from "../../context/projects/actions";
// Then I'll import the useProjectsDispatch hook from projects context
import { useProjectsDispatch } from "../../context/projects/context";

type Inputs = {
  name: string;
};

const NewProject = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Next, I'll add a new state to handle errors.
  const [error, setError] = useState(null);

  // Then I'll call the useProjectsDispatch function to get the dispatch function
  // for projects
  const dispatchProjects = useProjectsDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { name } = data;

    // Next, I'll call the addProject function with two arguments:
    //`dispatchProjects` and an object with `name` attribute.
    // As it's an async function, we will await for the response.
    const response = await addProject(dispatchProjects, { name });

    // Then depending on response, I'll either close the modal...
    if (response.ok) {
      setIsOpen(false);
    } else {
      // Or I'll set the error.
      setError(response.error as React.SetStateAction<null>);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        New Project
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create new project
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      {/* I'll show the error, if it exists.*/}
                      {error && <span>{error}</span>}
                      <input
                        type="text"
                        placeholder="Enter project name..."
                        autoFocus
                        {...register("name", { required: true })}
                        className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
                          errors.name ? "border-red-500" : ""
                        }`}
                      />
                      {errors.name && <span>This field is required</span>}
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Submit
                      </button>
                      <button
                        type="submit"
                        onClick={closeModal}
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Cancel
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default NewProject;
