export const findSessionByToken = async (token) => {
  const sessionResult = await connection.query(
    `
    SELECT
      *
    FROM
      sessions
    WHERE
      token = $1
  `,
    [token]
  );
  return sessionResult;
};
