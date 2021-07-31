import Main from "./Main";
import HeaderInternal from "@/components/elements/Header/Internal";
import Meta from "@/components/elements/Meta";

export default function InternalLayout({ children, meta }) {
  return (
    <>
      <Main>
        <Meta title={meta?.title ?? ""} description={meta?.description} />
        <div className="container mx-auto p-4">
          <HeaderInternal />
          <div
            className={`prose prose-${meta?.color} prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto py-20`}
          >
            <h6
              className={`sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-${meta?.color}-600 mb-3`}
            >
              {meta?.section}
            </h6>
            <h1>{meta?.title}</h1>
            {children}
          </div>
        </div>
      </Main>
    </>
  );
}
