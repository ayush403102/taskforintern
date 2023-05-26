"use client";

import Image from "next/image";
import Link from "next/link";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFillSquareFill } from "react-icons/Bs";
import { AiOutlineSearch } from "react-icons/Ai";
import { IoIosNotificationsOutline } from "react-icons/Io";
import { ImDownload3 } from "react-icons/Im";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";


const pages = () => {
  return (
    <>
      <div class="flex h-screen bg-black">
        <aside class="flex-shrink-0 hidden w-48 pl-2 overflow-y-auto md:block">
          <div>
            <div class="text-white">
              <div class="flex p-2  bg-black">
                <div class="flex py-3 px-2 text-center">
                  <p class="text-2xl text-pink-800 font-semibold">NEATSKILLS</p>
                </div>
              </div>

              <div>
                <ul class="mt-6 leading-10">
                  <li class="relative px-2 py-1 ">
                    <Link
                      class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer"
                      href=" #"
                    >
                      <BsFillSquareFill />
                      <span class="ml-4 hover:text-pink-800">Home</span>
                    </Link>
                  </li>
                  <li class="relative px-2 py-1 ">
                    <Link
                      class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer "
                      href=" #"
                    >
                      <BsFillSquareFill />
                      <span class="ml-4 hover:text-pink-800">My Progress</span>
                    </Link>
                  </li>
                  <li class="relative px-2 py-1 ">
                    <Link
                      class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer "
                      href=" #"
                    >
                      <BsFillSquareFill />
                      <span class="ml-4  hover:text-pink-800">Events</span>
                    </Link>
                  </li>
                  <hr className="m-8 w-32" />
                  <li class="relative px-2 py-1 ">
                    <Link
                      class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer "
                      href=" #"
                    >
                      <BsFillSquareFill />
                      <span class="ml-4 hover:text-pink-800">Schedule</span>
                    </Link>
                  </li>
                  <li class="relative px-2 py-1 ">
                    <Link
                      class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer "
                      href=" #"
                    >
                      <BsFillSquareFill />
                      <span class="ml-4 hover:text-pink-800">Live Class</span>
                    </Link>
                  </li>
                  <li class="relative px-2 py-1 ">
                    <Link
                      class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer "
                      href=" #"
                    >
                      <BsFillSquareFill />
                      <span class="ml-4 hover:text-pink-800">Study Material</span>
                    </Link>
                  </li>
                  <li class="relative px-2 py-1 ">
                    <Link
                      class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer "
                      href=" #"
                    >
                      <BsFillSquareFill />
                      <span class="ml-4 hover:text-pink-800">Home Work</span>
                    </Link>
                  </li>
                  <hr className="m-8 w-32" />
                  <li class="relative px-2 py-1 ">
                    <Link
                      class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer "
                      href=" #"
                    >
                      <BsFillSquareFill />
                      <span class="ml-4 hover:text-pink-800">Chats</span>
                    </Link>
                  </li>
                  <li class="relative px-2 py-1 ">
                    <Link
                      class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer "
                      href=" #"
                    >
                      <BsFillSquareFill />
                      <span class="ml-4 hover:text-pink-800">Profile</span>
                    </Link>
                  </li>
                </ul>
                <div className="flex place-content-start">
                  <button className="flex space-x-3 border border-gray-500 bg-gray-500 p-2 px-8 rounded-md ml-2 mt-8">
                    <IoSettingsOutline className="w-5 h-5 mt-0.5" />
                    <p>Settings</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div class="z-20 flex flex-col w-full h-full ">
          <main class="">
            <div class="grid pb-10 px-8 rounded-l-3xl bg-gray-800">
              <header class="py-4 ">
                <div class="flex items-center justify-between h-8 px-6 mx-auto">
                  <div class="flex justify-center mt-2 mr-4">
                    <div className="text-white flex text-center font-semibold text-xl py-2">
                      <p>Students</p>
                    </div>
                    <div class="item-center lg:ml-[750px] right-0 flex w-full flex-wrap items-stretch mb-2 text-gray-400">
                      <input
                        type="search"
                        placeholder="Search Students"
                        class="form-input px-3 pl-10 py-2relative bg-gray-600 rounded-lg text-sm "
                      />
                      <span class=" absolute pl-3 pt-1.5 ">
                        <AiOutlineSearch class="w-6 h-6" />
                      </span>
                    </div>
                  </div>

                  <ul class="flex items-center flex-shrink-0 space-x-2">
                    {/* <!-- Notifications menu --> */}
                    <li class="relative">
                      <button class="p-2 text-white align-middle rounded-full hover:text-pink-800">
                        <div class="flex items-cemter">
                          <IoIosNotificationsOutline className="h-6 w-6" />
                        </div>
                        {/* <!-- Notification badge --> */}
                        <span
                          class="absolute text-[0.65rem] top-0 right-0 inline-block w-4 h-4 placeholder-white placeholder-shownalignItems: 'center',
                          transform -translate-x-1 translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                        >
                          1
                        </span>
                      </button>
                    </li>

                    {/* <!-- Profile menu --> */}
                    <li class="relative">
                      <button class=" rounded-full">
                        <div class="flex items-center">
                          <img
                            class="rounded-full h-10 w-10"
                            src="/profile.jpg"
                          />
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
              </header>
              <hr className="bg-gray-500" />
              <div class="grid grid-cols-12 gap-6">
                <div class="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
                  <div class="col-span-12 mt-8">
                    <div class="flex items-center h-10 intro-y">
                      <h2 class="mr-5 text-white  text-lg font-medium truncate">
                        Track Progress of students
                      </h2>
                    </div>
                  </div>

                  <div className="flex">
                  <div class="item-center lg:ml-[650px] right-0 flex w-full flex-wrap items-stretch mb-2 text-gray-400">
                      <input
                        type="search"
                        placeholder="Search Students"
                        class="form-input px-3 pl-10 py-2relative bg-gray-600 rounded-lg text-sm "
                      />
                      <span class=" absolute pl-3 pt-1.5 ">
                        <AiOutlineSearch class="w-6 h-6" />
                      </span>
                    </div>
                  <div className="">
                      <button className="bg-gray-700 text-white rounded flex w-24 px-8 ml-[200px] py-2">
                        filter
                      </button>
                    </div>
                    <div className="">
                      <button className="bg-gray-700 text-white rounded flex w-52 px-8 ml-[50px] py-2">
                        Remove a Student
                      </button>
                    </div>
                  </div>
                  <div class="col-span-12 mt-5">
                    <div class="grid gap-2 grid-cols-1 lg:grid-cols-1">
                      <div class="flex flex-col">
                        <div class="-my-2 overflow-x-auto ">
                          <div class="py-2 align-middle inline-block min-w-full ">
                            <div class="shadow overflow-hidden border sm:rounded-3xl">
                              <table class="min-w-full divide-y ">
                                <thead className="text-white h-16">
                                  <tr>
                                    <th class="px-6 py-3 pl=6 bg-gray-600 text-sm font-medium tracking-wider">
                                      <div class="flex cursor-pointer">
                                        <span>Student Name</span>
                                      </div>
                                    </th>
                                    <th class="px-6 py-3 bg-gray-600 text-sm font-medium tracking-wider">
                                      <div class="flex cursor-pointer">
                                        <span class="mr-2">Id</span>
                                      </div>
                                    </th>
                                    <th class="px-6 py-3 bg-gray-600 text-sm font-medium tracking-wider">
                                      <div class="flex cursor-pointer">
                                        <span class="mr-2">Group</span>
                                      </div>
                                    </th>
                                    <th class="px-6 py-3 bg-gray-600 text-sm font-medium tracking-wider">
                                      <div class="flex cursor-pointer">
                                        <span class="mr-2">Class</span>
                                      </div>
                                    </th>
                                    <th class="px-6 py-3 bg-gray-600 text-sm font-medium tracking-wider">
                                      <div class="flex cursor-pointer">
                                        <span class="mr-2">Gender</span>
                                      </div>
                                    </th>
                                    <th class="px-6 py-3 bg-gray-600 text-sm font-medium tracking-wider">
                                      <div class="flex cursor-pointer">
                                        <span class="mr-2">Action</span>
                                      </div>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody class="bg-gray-800 text-white">
                                  <tr>
                                    <td class="px-6 flex space-x-5 py-4 whitespace-no-wrap text-sm leading-5">
                                      <img
                                        class="rounded-full h-8 w-8"
                                        src="/profile.jpg"
                                      />
                                      <p className="mt-1.5">Rachit Rajput</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <p>ID:53424</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex">
                                        <p>Group A</p>
                                      </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex space-x-4">
                                        <p>10</p>
                                      </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex space-x-4">
                                        <p>Male</p>
                                      </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex space-x-4 text-pink-600">
                                        <p>View Profile</p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                                <tbody class="bg-gray-800 text-white ">
                                  <tr>
                                    <td class="px-6 flex space-x-5 py-4 whitespace-no-wrap text-sm leading-5">
                                      <img
                                        class="rounded-full h-8 w-8"
                                        src="/profile.jpg"
                                      />
                                      <p className="mt-1.5">Rachit Rajput</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <p>ID:53424</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex">
                                        <p>Group A</p>
                                      </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex space-x-4">
                                        <p>10</p>
                                      </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex space-x-4">
                                        <p>Male</p>
                                      </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex space-x-4 text-pink-600">
                                        <p>View Profile</p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                                <tbody class="bg-gray-800 text-white ">
                                  <tr>
                                    <td class="px-6 flex space-x-5 py-4 whitespace-no-wrap text-sm leading-5">
                                      <img
                                        class="rounded-full h-8 w-8"
                                        src="/profile.jpg"
                                      />
                                      <p className="mt-1.5">Rachit Rajput</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <p>ID:53424</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex">
                                        <p>Group A</p>
                                      </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex space-x-4">
                                        <p>10</p>
                                      </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex space-x-4">
                                        <p>Male</p>
                                      </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex space-x-4 text-pink-600">
                                        <p>View Profile</p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                                <tbody class="bg-gray-800 text-white ">
                                  <tr>
                                    <td class="px-6 flex space-x-5 py-4 whitespace-no-wrap text-sm leading-5">
                                      <img
                                        class="rounded-full h-8 w-8"
                                        src="/profile.jpg"
                                      />
                                      <p className="mt-1.5">Rachit Rajput</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <p>ID:53424</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex">
                                        <p>Group A</p>
                                      </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex space-x-4">
                                        <p>10</p>
                                      </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex space-x-4">
                                        <p>Male</p>
                                      </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex space-x-4 text-pink-600">
                                        <p>View Profile</p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                                <tbody class="bg-gray-800 text-white ">
                                  <tr>
                                    <td class="px-6 flex space-x-5 py-4 whitespace-no-wrap text-sm leading-5">
                                      <img
                                        class="rounded-full h-8 w-8"
                                        src="/profile.jpg"
                                      />
                                      <p className="mt-1.5">Rachit Rajput</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <p>ID:53424</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex">
                                        <p>Group A</p>
                                      </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex space-x-4">
                                        <p>10</p>
                                      </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex space-x-4">
                                        <p>Male</p>
                                      </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex space-x-4 text-pink-600">
                                        <p>View Profile</p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                                <tbody class="bg-gray-800 text-white ">
                                  <tr>
                                    <td class="px-6 flex space-x-5 py-4 whitespace-no-wrap text-sm leading-5">
                                      <img
                                        class="rounded-full h-8 w-8"
                                        src="/profile.jpg"
                                      />
                                      <p className="mt-1.5">Rachit Rajput</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <p>ID:53424</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex">
                                        <p>Group A</p>
                                      </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex space-x-4">
                                        <p>10</p>
                                      </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex space-x-4">
                                        <p>Male</p>
                                      </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                      <div class="flex space-x-4 text-pink-600">
                                        <p>View Profile</p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default pages