export const AddCredential = () => {
  return (
    <form action="" className="flex flex-row gap-5 p-5 bg-amber-300">
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="userEmail">Email:</label>
        <input type="text" name="userEmail" id="userEmail" />
      </div>
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="userPassword">Password:</label>
        <input type="password" name="userPassword" id="userPassword" />
      </div>
      <div className="flex flex-col items-start gap-2 justify-center">
        
        <button type="submit">Save</button>
      </div>
    </form>
  );
};
