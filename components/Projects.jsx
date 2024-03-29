import ContentfulImage from "@/components/ui/ContentfulImage";
import { client } from "@/lib/contentful/client";
import RichText from "@/components/RichText";

// const ProjectItem = ({ post }) => (
//   <li>
//     <p className="text-2xl text-center bg-red-700">{post.title}</p>
//     <div className="mb-2">
//       <ContentfulImage
//         alt={`Cover Image for ${post.image.alt}`}
//         src={post.image.src}
//         width={post.image.width}
//         height={post.image.height}
//         quality={10}
//         className="image"
//       />
//     </div>
//     <div className="mx-auto prose">
//       <RichText content={post.description} />
//     </div>
//     <div>
//       {post.techs.map((tech, i) => (
//         <span className="list-item" key={i}>
//           {tech}
//         </span>
//       ))}
//     </div>
//     <a href={post.liveURL} target="_blank" rel="noopener noreferrer">
//       Live Demo
//     </a>
//     <a href={post.github} target="_blank" rel="noopener noreferrer">
//       Github
//     </a>
//   </li>
// );

function Works({ post }) {
  console.log("2nd PSTS:", post);
  return (
    <>
      {/* ITEM 1 - START */}
      <div class="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
        {/* BG ANIMATION */}
        <div
          aria-hidden="true"
          class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
        ></div>

        <div class="relative">
          {/* TITLE */}
          <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
            <p class="text-2xl font-bold text-gray-700 dark:text-gray-300">
              {post.title}
            </p>
          </div>

          {/* IMAGE */}

          <div className="mb-2">
            <ContentfulImage
              alt={`Cover Image for ${post.image.alt}`}
              src={post.image.src}
              width={post.image.width}
              height={post.image.height}
              quality={10}
              className="image"
            />
          </div>

          {/* DESCRIPTION */}
          <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
            <p class="text-gray-700 dark:text-gray-300">
              <RichText content={post.description} />
            </p>
          </div>

          {/* TECHS */}
          <div class="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
            <svg
              class="text-[#000014] dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 128 128"
            >
              <defs>
                <linearGradient
                  id="deviconAstro0"
                  x1="882.997"
                  x2="638.955"
                  y1="27.113"
                  y2="866.902"
                  gradientTransform="scale(.1)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="currentColor"></stop>
                  <stop offset="1" stop-color="currentColor"></stop>
                </linearGradient>
                <linearGradient
                  id="deviconAstro1"
                  x1="1001.68"
                  x2="790.326"
                  y1="652.45"
                  y2="1094.91"
                  gradientTransform="scale(.1)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#ff1639"></stop>
                  <stop offset="1" stop-color="#ff1639" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#deviconAstro0)"
                d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm0 0"
              ></path>
              <path
                fill="#ff5d01"
                d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0"
              ></path>
              <path
                fill="url(#deviconAstro1)"
                d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0"
              ></path>
            </svg>
          </div>

          {/* DOWNLOAD BUTTON */}

          <div class="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
            <a
              href={post.liveURL}
              //   download="/"
              class="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
            >
              <span>View Demo</span>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m17 13l-5 5m0 0l-5-5m5 5V6"
                ></path>
              </svg> */}

              <svg
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Interface / External_Link">
                    {" "}
                    <path
                      id="Vector"
                      d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      stroke="currentColor"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </a>

            {/* GITHUB BUTTON */}
            <a
              href={post.githubUrl}
              class="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center"
            >
              <span class="sr-only">Source Code</span>
              <svg
                class="size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                ></path>
              </svg>
            </a>

            {/* KAGGLE */}
            <a
              href={post?.kaggleUrl}
              className={`group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center w-1/5 p-1 ${
                post.kaggleUrl ? "" : "pointer-events-none cursor-not-allowed"
              }`}
            >
              <span class="sr-only">Kaggle</span>

              <svg
                fill="#ffffff"
                viewBox="-3.2 -3.2 38.40 38.40"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
                stroke-width="0.00032"
                transform="rotate(0)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="0.064"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>kaggle</title>{" "}
                  <path d="M9.538 16.211v1.277c-0.313 0.301-0.739 0.486-1.208 0.486-0.078 0-0.155-0.005-0.23-0.015l0.009 0.001c-0.212-0.014-0.404-0.086-0.565-0.2l0.003 0.002c-0.151-0.102-0.256-0.263-0.281-0.45l-0-0.003q-0.064-0.498 0.562-0.766c0.504-0.177 1.088-0.296 1.693-0.331l0.017-0.001zM19.984 14.143c0.060-0.009 0.129-0.014 0.199-0.014 0.568 0 1.057 0.337 1.279 0.822l0.004 0.009h-0v2.106c-0.234 0.496-0.73 0.833-1.304 0.833-0.076 0-0.15-0.006-0.223-0.017l0.008 0.001c-0.015 0.001-0.032 0.001-0.050 0.001-0.354 0-0.674-0.142-0.908-0.371l0 0c-0.314-0.351-0.506-0.817-0.506-1.328 0-0.063 0.003-0.125 0.009-0.187l-0.001 0.008q0-1.863 1.493-1.864zM13.983 14.143c0.060-0.009 0.129-0.014 0.199-0.014 0.568 0 1.057 0.337 1.278 0.822l0.004 0.009v2.106c-0.234 0.496-0.73 0.833-1.304 0.833-0.076 0-0.15-0.006-0.223-0.017l0.008 0.001c-0.015 0.001-0.032 0.001-0.050 0.001-0.353 0-0.674-0.142-0.907-0.371l0 0c-0.314-0.351-0.506-0.817-0.506-1.327 0-0.063 0.003-0.125 0.009-0.187l-0.001 0.008q0-1.863 1.493-1.864zM28.26 14.015c0.009-0 0.020-0 0.032-0 0.392 0 0.749 0.15 1.016 0.397l-0.001-0.001c0.286 0.235 0.468 0.587 0.472 0.982v0.001h-3.076c0.067-0.399 0.265-0.743 0.547-0.994l0.002-0.001c0.261-0.237 0.61-0.383 0.992-0.383 0.006 0 0.011 0 0.017 0h-0.001zM28.286 13.033c-0.030-0.001-0.066-0.002-0.102-0.002-0.74 0-1.409 0.304-1.889 0.793l-0 0c-0.514 0.531-0.831 1.255-0.831 2.053 0 0.023 0 0.046 0.001 0.070l-0-0.003c-0.001 0.031-0.002 0.067-0.002 0.104 0 0.809 0.322 1.542 0.845 2.079l-0.001-0.001c0.534 0.537 1.272 0.869 2.089 0.869 0.029 0 0.057-0 0.086-0.001l-0.004 0c0.018 0 0.039 0.001 0.060 0.001 0.781 0 1.502-0.259 2.080-0.696l-0.009 0.006c0.068-0.051 0.068-0.11 0-0.179l-0.6-0.613c-0.051-0.051-0.115-0.051-0.192 0-0.345 0.248-0.775 0.396-1.241 0.396-0.008 0-0.016-0-0.024-0h0.001c-0.021 0.001-0.045 0.001-0.070 0.001-0.474 0-0.909-0.169-1.248-0.451l0.003 0.003c-0.292-0.264-0.489-0.629-0.535-1.039l-0.001-0.007h4.148c0.005 0.001 0.010 0.001 0.016 0.001 0.062 0 0.113-0.051 0.113-0.113 0-0.006-0-0.011-0.001-0.017l0 0.001 0.012-0.28c0.006-0.071 0.010-0.153 0.010-0.235 0-0.741-0.291-1.413-0.764-1.91l0.001 0.001c-0.475-0.511-1.151-0.83-1.901-0.83-0.018 0-0.036 0-0.054 0.001l0.003-0zM19.856 13.033c-0.028-0.001-0.062-0.002-0.095-0.002-0.769 0-1.448 0.387-1.853 0.977l-0.005 0.008c-0.369 0.527-0.589 1.182-0.589 1.888 0 0.036 0.001 0.072 0.002 0.108l-0-0.005c-0.002 0.038-0.002 0.082-0.002 0.127 0 0.723 0.23 1.392 0.622 1.938l-0.007-0.010c0.422 0.569 1.092 0.933 1.847 0.933 0.033 0 0.066-0.001 0.098-0.002l-0.005 0c0.036 0.002 0.079 0.003 0.122 0.003 0.557 0 1.070-0.188 1.479-0.505l-0.006 0.004v0.664q0 1.608-1.545 1.608c-0.56-0.046-1.050-0.313-1.389-0.712l-0.002-0.003c-0.022-0.024-0.054-0.038-0.089-0.038-0 0-0 0-0.001 0h0c-0.002-0-0.004-0-0.007-0-0.037 0-0.071 0.015-0.095 0.039l-0.6 0.6c-0.022 0.023-0.036 0.055-0.036 0.090 0 0.041 0.019 0.077 0.048 0.101l0 0q0.255 0.217 0.447 0.364t0.332 0.236c0.403 0.233 0.886 0.37 1.401 0.37 0.001 0 0.002 0 0.003 0h-0c0.049 0.003 0.106 0.005 0.164 0.005 0.702 0 1.339-0.277 1.809-0.727l-0.001 0.001c0.437-0.508 0.703-1.175 0.703-1.903 0-0.074-0.003-0.147-0.008-0.219l0.001 0.010v-5.706c0.001-0.005 0.001-0.010 0.001-0.016 0-0.062-0.050-0.113-0.113-0.113-0.006 0-0.011 0-0.017 0.001l0.001-0h-0.881c-0.005-0.001-0.010-0.001-0.016-0.001-0.062 0-0.113 0.050-0.113 0.113 0 0.006 0 0.011 0.001 0.017l-0-0.001v0.255c-0.42-0.312-0.949-0.499-1.522-0.499-0.030 0-0.060 0.001-0.090 0.002l0.004-0zM13.855 13.033c-0.028-0.001-0.062-0.002-0.095-0.002-0.769 0-1.448 0.387-1.853 0.977l-0.005 0.008c-0.368 0.527-0.589 1.182-0.589 1.888 0 0.036 0.001 0.072 0.002 0.109l-0-0.005c-0.002 0.038-0.002 0.082-0.002 0.127 0 0.723 0.23 1.392 0.622 1.938l-0.007-0.010c0.422 0.569 1.092 0.933 1.847 0.933 0.033 0 0.066-0.001 0.098-0.002l-0.005 0c0.036 0.002 0.079 0.003 0.122 0.003 0.557 0 1.070-0.188 1.479-0.505l-0.006 0.004v0.664q0 1.608-1.545 1.608c-0.56-0.046-1.050-0.313-1.389-0.712l-0.002-0.003c-0.022-0.024-0.054-0.038-0.089-0.038-0 0-0 0-0.001 0h0c-0.002-0-0.004-0-0.007-0-0.037 0-0.071 0.015-0.096 0.039l-0.6 0.6c-0.022 0.023-0.036 0.055-0.036 0.090 0 0.041 0.019 0.078 0.049 0.101l0 0q0.255 0.217 0.447 0.364t0.332 0.236c0.403 0.233 0.886 0.37 1.401 0.37 0.001 0 0.002 0 0.003 0h-0c0.049 0.003 0.106 0.005 0.164 0.005 0.702 0 1.339-0.277 1.809-0.727l-0.001 0.001c0.437-0.508 0.703-1.175 0.703-1.903 0-0.074-0.003-0.146-0.008-0.219l0.001 0.010v-5.706c0.001-0.005 0.001-0.010 0.001-0.016 0-0.062-0.050-0.113-0.113-0.113-0.006 0-0.011 0-0.017 0.001l0.001-0h-0.881c-0.005-0.001-0.010-0.001-0.016-0.001-0.062 0-0.113 0.050-0.113 0.113 0 0.006 0 0.011 0.001 0.017l-0-0.001v0.255c-0.42-0.312-0.949-0.499-1.522-0.499-0.030 0-0.061 0.001-0.091 0.002l0.004-0zM8.453 13.033c-0.769 0.010-1.476 0.262-2.052 0.684l0.010-0.007c-0.068 0.068-0.081 0.127-0.038 0.179l0.459 0.651c0.034 0.060 0.090 0.068 0.166 0.025 0.402-0.303 0.905-0.492 1.451-0.511l0.004-0c0.025-0.002 0.055-0.004 0.085-0.004 0.557 0 1.009 0.452 1.009 1.009 0 0.046-0.003 0.092-0.009 0.136l0.001-0.005c-0.687 0.056-1.318 0.165-1.929 0.323l0.078-0.017q-1.557 0.447-1.557 1.698c-0 0.013-0.001 0.028-0.001 0.043 0 0.502 0.222 0.952 0.573 1.257l0.002 0.002c0.361 0.31 0.835 0.498 1.352 0.498 0.014 0 0.028-0 0.042-0l-0.002 0c0.030 0.001 0.065 0.002 0.1 0.002 0.503 0 0.969-0.159 1.35-0.428l-0.007 0.005v0.179c0 0.085 0.047 0.127 0.14 0.127h0.881c0.005 0.001 0.010 0.001 0.016 0.001 0.062 0 0.113-0.050 0.113-0.113 0-0.006-0-0.011-0.001-0.017l0 0.001v-3.536c0.004-0.048 0.007-0.105 0.007-0.162 0-0.674-0.333-1.271-0.843-1.634l-0.006-0.004c-0.373-0.241-0.828-0.384-1.317-0.384-0.026 0-0.052 0-0.078 0.001l0.004-0zM23.678 10.186c-0.005-0.001-0.010-0.001-0.016-0.001-0.062 0-0.113 0.050-0.113 0.113 0 0.006 0 0.011 0.001 0.016l-0-0.001v8.438c-0.001 0.005-0.001 0.010-0.001 0.016 0 0.062 0.050 0.113 0.113 0.113 0.006 0 0.011-0 0.017-0.001l-0.001 0h0.881c0.005 0.001 0.010 0.001 0.016 0.001 0.062 0 0.113-0.050 0.113-0.113 0-0.006-0-0.011-0.001-0.017l0 0.001v-8.438c0.001-0.005 0.001-0.010 0.001-0.016 0-0.062-0.050-0.113-0.113-0.113-0.006 0-0.011 0-0.017 0.001l0.001-0zM1.132 10.186c-0.005-0.001-0.010-0.001-0.016-0.001-0.062 0-0.113 0.051-0.113 0.113 0 0.006 0 0.011 0.001 0.016l-0-0.001v8.438c-0.001 0.005-0.001 0.010-0.001 0.016 0 0.062 0.051 0.113 0.113 0.113 0.006 0 0.011-0 0.017-0.001l-0.001 0h0.881c0.005 0.001 0.010 0.001 0.016 0.001 0.062 0 0.113-0.051 0.113-0.113 0-0.006-0-0.011-0.001-0.017l0 0.001v-1.851l0.523-0.498 1.876 2.387c0.042 0.054 0.106 0.088 0.179 0.089h1.136c0.059 0 0.093-0.017 0.102-0.051 0.006-0.013 0.009-0.029 0.009-0.045 0-0.032-0.013-0.062-0.035-0.083h-0l-2.476-3.076 2.375-2.297c0.015-0.018 0.024-0.041 0.024-0.067 0-0.018-0.004-0.034-0.012-0.049l0 0.001c-0.015-0.038-0.051-0.064-0.093-0.064-0.003 0-0.006 0-0.009 0l0-0h-1.174c-0.072 0.005-0.135 0.038-0.178 0.089l-0 0-2.246 2.272v-5.195c0.001-0.005 0.001-0.010 0.001-0.016 0-0.062-0.051-0.113-0.113-0.113-0.006 0-0.011 0-0.017 0.001l0.001-0z"></path>{" "}
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* ITEM 1 - END */}
    </>
  );
}

export default async function Projects() {
  const data = await client.getEntries({ content_type: "productPage" });
  const posts = await data?.items.map((item) => ({
    id: item?.sys?.id,
    title: item?.fields?.title,
    description: item?.fields?.description,
    image: {
      src: item?.fields?.image?.fields?.file?.url,
      alt: item?.fields?.image?.fields?.title,
      height: item?.fields?.image?.fields?.file?.details?.image?.height,
      width: item?.fields?.image?.fields?.file?.details?.image?.width,
    },
    techs: item?.fields?.techs,
    liveURL: item?.fields?.liveDemoUrl,
    githubUrl: item?.fields?.githubRepoUrl,
    kaggleUrl: item?.fields?.kaggleUrl,
  }));

  return (
    <section>
      <div class="py-16">
        <div class="mx-auto px-6 max-w-6xl text-gray-500">
          <div class="text-center">
            <h2 class="text-5xl text-gray-950 dark:text-white font-semibold">
              Some of my works
            </h2>
            <p class="mt-1 text-gray-700 dark:text-gray-300 text-xs">
              Powered by Contentful
            </p>
          </div>
          <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {posts.map((post) => (
              <Works key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
