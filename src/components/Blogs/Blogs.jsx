import { useSetTitle } from "../../hooks/useSetTitle";

const Blogs = () => {
  useSetTitle("Blogs");
  return (
    <div className="px-12 space-y-2">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>
            An access token is a tiny piece of code that contains a large amount
            of data including user, permissions, groups, and time frames that
            pass from a server to a user&apos;s device. Header, payload and
            signature are 3 key element that almost every access token has. It
            provides refresh token a valid requesting permission to access
            confidential resources.It can be stored in local storage and as
            cookies.
            <br />
            On the other hand, A refresh token is a special token that is used
            to obtain additional access tokens and works alongside with them.
            This allows to have short-lived access tokens without having to
            collect credentials every time one expires. It works by
            re-validating a user without them having to re-enter their login
            credentials multiple times. It can be stored in local storage and as
            http only cookies.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What are the difference between SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p>
            <span className="font-bold">SQL data base:</span> <br />
            1. Relational type <br />
            2. structured data are saved in tables. <br />
            3. It has static data base structure <br />
            4. It is suitable for design complex queries <br />
            5. requires downtime.
            <br />
            <span className="font-bold"> NoSQL data base:</span> <br />
            1. non-relational type <br />
            2. unstructured data are stored in JSON file <br />
            3. Not suitable for complex queries design <br />
            4. It is automatic <br />
            5. It doesn't require outrage.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is express js? What is Nest JS?
        </div>
        <div className="collapse-content">
          <p>
            <span className="font-bold">Express Js:</span> It is a node js web
            application framework that gives broad features for creating web and
            mobile applications. It can build a single page, multi-page, and
            hybrid web application.
            <br />
            <span className="font-bold">Nest.js:</span> It is a framework for
            building efficient and scalable server-side applications. It uses
            JavaScript/TypeScript and follows a modular architecture to simplify
            development and provide features like dependency injection, routing,
            and middleware integration.{" "}
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            MongoDB aggregate is a powerful feature that performs complex data
            operations. <br /> It combines data from multiple documents,
            filters, groups, sorts, and applies computations. <br /> It works by
            chaining stages to create a pipeline that processes and transforms
            the data efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
