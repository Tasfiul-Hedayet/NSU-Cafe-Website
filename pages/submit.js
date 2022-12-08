import Link from "next/link";

function submit() {
  return (
    <>
      <p>
        Thank you for purchasing. Welcome to our community. We are happy to have
        you.
      </p>

      <h4> [Team NSU CAFE] </h4>

      <button>
        {" "}
        <Link href="/index"> Return </Link>{" "}
      </button>
    </>
  );
}

export default submit;
