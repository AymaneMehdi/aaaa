import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layouts from "@layouts/Layouts";
import Head from "next/head";

const BlogPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://back-end-8x0o.onrender.com/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog');
        }
        const blogData = await response.json();
        console.log('Fetched Blog Data:', blogData); // Log the fetched data
        setBlog(blogData);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  // Check if blog is null or undefined
  if (!blog) {
    return <Layouts>Loading...</Layouts>;
  }

  // Check if blog does not have the expected structure
  if (!blog.title || !blog.author || !blog.createdAt || !blog.text) {
    return <Layouts>Pas de blog à afficher pour le moment.</Layouts>;
  }

  // Log the blog object to inspect its structure
  console.log('Blog Object:', blog);
  const createdAtFormatted = new Date(blog.createdAt).toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  });

  return (
    <Layouts>
    <Head>
        <title>{blog.Metatitle}</title>
        <meta
          name={blog.description}
          content="FeizhouCom l'agence qui donne vie à votre identité,reflétant fidèlement votre essence et vos valeurs. "
        />
        <meta
        name="keywords"
        content={`${blog.keyword1}, ${blog.keyword2}, ${blog.keyword3}, ${blog.keyword4}, ${blog.keyword5}, ${blog.keyword6}`}
      />
        <meta name="author" content={blog.author} />
      </Head>
      <div className="max-w-screen-lg mx-auto mt-44">
        <main className="mt-10">
          <div className="mb-4 md:mb-0 w-full mx-auto relative">
            <div className="px-4 lg:px-0">
              <h2 className="text-4xl font-semibold text-gray-800 leading-tight mb-7">
                {blog.title}
              </h2>
              <img
              src={blog.url}
              className="w-full h-full object-cover mb-5"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              alt={blog.alt}
            />
            <p className="py-2 text-[#ff6847] inline-flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle mr-2 ml-2" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
              </svg>{blog.author}
              </p><br/>
              <div className="py-2 text-[#ff6847] inline-flex items-center justify-center mb-2 -mt-28">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-minus-fill mr-2 ml-2" viewBox="0 0 16 16">
              <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1"/>
            </svg>{createdAtFormatted}
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
              <p className="pb-6 -mt-14">
                {typeof window !== 'undefined' && (
                  <EditorComponent blog={blog} />
                )}
              </p>
            </div>
          </div>
        </main>
      </div>
    </Layouts>
  );
};

const EditorComponent = ({ blog }) => {
  const { EditorState, convertFromRaw } = require('draft-js');
  const { Editor } = require('react-draft-wysiwyg');

  return (
    <Editor
      editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(blog.text)))}
      readOnly={true}
      toolbarHidden={true}
    />
  );
};

export default BlogPage;
