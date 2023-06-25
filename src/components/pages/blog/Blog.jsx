import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div className="my-12">
      <Helmet>
        <title>Toy Mart | Blog</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center">Blog</h1>
      <article>
        <h1 className="text-2xl font-bold my-5">
          {" "}
          <span>Question: 1)</span> What is an access token and refresh token?
          How do they work and where should we store them on the client-side?
        </h1>
        <span className="font-1xl font-bold">Answer:</span>
        <p>
          The basic purposes of access token and a refresh tokens are protecting
          and safeguarding authentication systems to provide secure access to
          protected data resources.
        </p>

        <ol class="list-decimal ml-8">
          <li class="mb-2">
            {" "}
            Access Token: An Access token is a credential that is used to access
            protected resources on behalf of a user. It is structurally a JSON
            Web Token (JWT) that identifies the users and their permissions. The
            access token is short-lived and has an expiration time limit. It is
            sent with each request to access protected resources and is used to
            authenticate and authorize the user while logging in and browsing.{" "}
          </li>
          <li class="mb-2">
            Refresh Token: As access token is shoer-lived, a refresh token is a
            credential used to obtain a new access token after the previous one
            has expired. It is a long-lived token with a longer expiration time
            compared to the access token. The refresh token is typically used to
            request a new access token without requiring the user to re-enter
            their credentials. A refresh token is more secure to send and store
            a refresh token compared to storing long-lived access tokens in web
            technology.
          </li>
          <li class="mb-2">Item 3</li>
        </ol>
        <h2 className="ml- font-bold">Where to store ?</h2>
        <ul class="list-disc ml-8">
          <li>
            Storing tokens in memory: The access token can be stored in memory
            (in a variable) and used in API requests. However, it is important
            to note that storing tokens in memory alone does not persist them
            across page refreshes or browser sessions for the users.
          </li>
          <li>
            Storing tokens in browser storage: Tokens can also be stored in
            browser storage mechanisms such as localStorage or sessionStorage.
            However, this approach poses security risks like vulnerability to
            cross-site scripting (XSS) attacks in the wen world.
          </li>
          <li>
            Storing tokens in HTTP-only cookies: Tokens can also be stored as
            HTTP-only cookies, which are not accessible to JavaScript. This
            provides enhanced security against XSS attacks. However, this
            approach requires careful consideration of secure cookie
            configurations. So, nothing is 100% carefree as XSS is a very common
            issue in the net world.s
          </li>
        </ul>
      </article>

      <article>
        <h1 className="text-2xl font-bold my-5">
          {" "}
          <span>Question: 2)</span> Compare SQL and NoSQL databases.
        </h1>
        <span className="font-1xl font-bold">Answer:</span>
        <p>
          {" "}
          These are two very popular data models dealing wih data. SQL stands
          for (Structured Query Language) and NoSQL stands for (Not Only SQL).
          These are two types of database management systems that differ in
          their data models, query languages, and scalability options. Here are
          some key differences between SQL and NoSQL databases. There are
          differences between them but they two share one thing in common
          common, that is they are used for dealing with data.
        </p>

        <ol class="list-decimal ml-8">
          <li class="mb-2">
            {" "}
            SQL: SQL databases use a structured data model based on tables with
            predefined schemas. Data is organized into rows and columns, and
            relationships between tables are established through primary and
            foreign keys.
          </li>
          <li class="mb-2">
            NoSQL: NoSQL databases use various data models such as key-value,
            document, columnar, or graph. They offer flexible schemas, allowing
            for dynamic and unstructured data.
          </li>
          <li class="mb-2">
            SQL: SQL databases typically scale vertically by adding more
            resources (CPU, RAM) to a single server. Scaling horizontally across
            multiple servers can be challenging and may require additional
            measures such as sharding or replication. NoSQL: NoSQL databases are
            designed for horizontal scalability. They are built to scale out
            across multiple servers or clusters easily, allowing for seamless
            distribution of data and increased performance.
          </li>
          <li class="mb-2">
            SQL: SQL databases have rigid schemas where the structure of data is
            predefined. Changes to the schema may require altering existing
            tables and migrating data, which can be time-consuming.
          </li>
          <li class="mb-2">
            NoSQL: NoSQL databases offer schema flexibility, allowing for
            dynamic and evolving data structures. They can handle unstructured
            or semi-structured data without requiring schema modifications.
          </li>
        </ol>
        <h2 className="font-bold">What is important is:</h2>
        <p class="">
          It's important to note that these are general differences and not
          absolute characteristics of all SQL or NoSQL databases. There is a
          wide range of SQL and NoSQL databases available, each with its own
          features, strengths, and weaknesses. The choice between SQL and NoSQL
          depends on the specific requirements and characteristics of your
          application.
        </p>
      </article>

      <article>
        <h1 className="text-2xl font-bold my-5">
          {" "}
          <span>Question: 3)</span> What is express js? What is Nest JS ?
        </h1>
        <span className="font-1xl font-bold">Answer:</span>
        <p>
          In the general term Express.js and Nest.js are both web application
          frameworks for Node.js, but they differ in terms of their design
          philosophy, features, and the way they facilitate building web
          applications. Both of them are popular now a days.
        </p>
        <h2 className="font-bold">Express.js:</h2>
        <ol class="list-decimal ml-8">
          <li class="mb-2">
            Express.js is a minimal and unopinionated web framework for Node.js.
            It provides a simple and flexible API for building web applications
            and APIs.
          </li>
          <li class="mb-2">
            Express.js is often considered a "micro" framework, as it provides
            the fundamental building blocks for web applications but leaves many
            architectural decisions to the developers.
          </li>
          <li class="mb-2">
            It has a large and active community with a vast ecosystem of
            middleware and extensions.
          </li>
        </ol>
        <h2 className="font-bold">Nest.js:</h2>
        <ol class="list-decimal ml-8">
          <li class="mb-2">
            Nest.js is a full-featured, opinionated web framework for building
            scalable and maintainable server-side applications with Node.js.
          </li>
          <li class="mb-2">
            Nest.js is built with TypeScript and takes advantage of its features
            like static typing, decorators, and dependency injection.
          </li>
          <li class="mb-2">
            Nest.js promotes the use of well-known design patterns such as
            Dependency Injection (DI) and Decorators to write clean and testable
            code.
          </li>
          <li class="mb-2">
            Nest.js integrates well with other libraries and frameworks,
            supporting various databases, GraphQL, WebSockets, and more.
          </li>
        </ol>
        <p class="">
          In fine, while Express.js offers a minimalist approach and gives
          developers more control over the application structure, Nest.js
          provides a more opinionated and feature-rich framework with built-in
          architectural patterns and tools. The choice between Express.js and
          Nest.js depends on the project's requirements, complexity, and the
          developer's preference for level of abstraction and opinionation.
        </p>
      </article>

      <article>
        <h1 className="text-2xl font-bold my-5">
          {" "}
          <span>Question: 4)</span> What is MongoDB aggregate and how does it
          work ?
        </h1>
        <span className="font-1xl font-bold">Answer:</span>
        <p>
          In MongoDB the aggregate method takes an array of pipeline stages as
          its argument. Each stage performs a specific operation on the input
          documents and passes the transformed output to the next stage in the
          pipeline. The stages are executed in the order they appear in the
          array.
        </p>
        <h2 className="font-bold">MongoDB aggregate:</h2>
        <ol class="list-decimal ml-8">
          <li class="mb-2">
            Match stage: The first stage in the pipeline is often the $match
            stage. It filters the documents based on specified criteria, similar
            to the find method. It allows you to include only the documents that
            match certain conditions.
          </li>
          <li class="mb-2">
            Grouping and aggregation stages: MongoDB provides various stages for
            grouping and aggregating data. Some commonly used stages include
            $group, $sort, $limit, $skip, $count, $sum, $avg, $min, $max, and
            more. These stages enable you to group documents, calculate
            aggregate values, sort the results, limit the number of documents,
            and perform other aggregation operations.
          </li>
          <li class="mb-2">
            Output: The final stage in the pipeline is typically the $project
            stage again or the $replaceRoot stage, which shapes the final output
            of the aggregation pipeline by specifying the fields to include or
            exclude.
          </li>
        </ol>
        <h2 className="font-bold">In a nutshell:</h2>

        <p class="">
          It is very useful. t's important to note that the aggregate method
          allows for extensive data processing capabilities, but it is also more
          resource-intensive compared to simple query operations. Properly
          indexing your collection and carefully designing your aggregation
          pipeline can help optimize performance when working with large
          datasets in the world of web development world.
        </p>
      </article>
      <h1 className="text-2xl font-bold my-10 text-center">
        {" "}
        ---- Thank You ----{" "}
      </h1>
    </div>
  );
};

export default Blog;
