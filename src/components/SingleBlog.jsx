import { useLoaderData } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa6';
import Sidebar from './Sidebar';

const SingleBlog = () => {
  const data = useLoaderData();
  //   console.log(data);
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Single blog Page
        </h2>
      </div>

      {/* Blog details */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt="" className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />
            {author} | {published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" />
            {reading_time}
          </p>
          <p className="text-base text-gray-600 mb-6">{content}</p>
          <div className="text-base text-gray-600">
            <p>
              Do the difficult things while they are easy and do the great
              things while they are small. A journey of a thousand miles must
              begin with a single step.
            </p>
            <p>
              In this age of omniconnectedness, words like network, community
              and even friends no longer mean what they used to. Networks don't
              exist on LinkedIn. A community is not something that happens on a
              blog or on Twitter. And a friend is more than someone whose online
              status you check.
            </p>
            <p>
              Do the difficult things while they are easy and do the great
              things while they are small. A journey of a thousand miles must
              begin with a single step.
            </p>
            <p>
              In this age of omniconnectedness, words like network, community
              and even friends no longer mean what they used to. Networks don't
              exist on LinkedIn. A community is not something that happens on a
              blog or on Twitter. And a friend is more than someone whose online
              status you check.
            </p>
            <p>
              Do the difficult things while they are easy and do the great
              things while they are small. A journey of a thousand miles must
              begin with a single step.
            </p>
            <p>
              In this age of omniconnectedness, words like network, community
              and even friends no longer mean what they used to. Networks don't
              exist on LinkedIn. A community is not something that happens on a
              blog or on Twitter. And a friend is more than someone whose online
              status you check.
            </p>
            <p>
              Do the difficult things while they are easy and do the great
              things while they are small. A journey of a thousand miles must
              begin with a single step.
            </p>
            <p>
              In this age of omniconnectedness, words like network, community
              and even friends no longer mean what they used to. Networks don't
              exist on LinkedIn. A community is not something that happens on a
              blog or on Twitter. And a friend is more than someone whose online
              status you check.
            </p>
            <p>
              Do the difficult things while they are easy and do the great
              things while they are small. A journey of a thousand miles must
              begin with a single step.
            </p>
            <p>
              In this age of omniconnectedness, words like network, community
              and even friends no longer mean what they used to. Networks don't
              exist on LinkedIn. A community is not something that happens on a
              blog or on Twitter. And a friend is more than someone whose online
              status you check.
            </p>
            <p>
              Do the difficult things while they are easy and do the great
              things while they are small. A journey of a thousand miles must
              begin with a single step.
            </p>
            <p>
              In this age of omniconnectedness, words like network, community
              and even friends no longer mean what they used to. Networks don't
              exist on LinkedIn. A community is not something that happens on a
              blog or on Twitter. And a friend is more than someone whose online
              status you check.
            </p>
            <p>
              Do the difficult things while they are easy and do the great
              things while they are small. A journey of a thousand miles must
              begin with a single step.
            </p>
            <p>
              In this age of omniconnectedness, words like network, community
              and even friends no longer mean what they used to. Networks don't
              exist on LinkedIn. A community is not something that happens on a
              blog or on Twitter. And a friend is more than someone whose online
              status you check.
            </p>
            <p>
              Do the difficult things while they are easy and do the great
              things while they are small. A journey of a thousand miles must
              begin with a single step.
            </p>
            <p>
              In this age of omniconnectedness, words like network, community
              and even friends no longer mean what they used to. Networks don't
              exist on LinkedIn. A community is not something that happens on a
              blog or on Twitter. And a friend is more than someone whose online
              status you check.
            </p>
            <p>
              Do the difficult things while they are easy and do the great
              things while they are small. A journey of a thousand miles must
              begin with a single step.
            </p>
            <p>
              In this age of omniconnectedness, words like network, community
              and even friends no longer mean what they used to. Networks don't
              exist on LinkedIn. A community is not something that happens on a
              blog or on Twitter. And a friend is more than someone whose online
              status you check.
            </p>
            <p>
              Do the difficult things while they are easy and do the great
              things while they are small. A journey of a thousand miles must
              begin with a single step.
            </p>
            <p>
              In this age of omniconnectedness, words like network, community
              and even friends no longer mean what they used to. Networks don't
              exist on LinkedIn. A community is not something that happens on a
              blog or on Twitter. And a friend is more than someone whose online
              status you check.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
