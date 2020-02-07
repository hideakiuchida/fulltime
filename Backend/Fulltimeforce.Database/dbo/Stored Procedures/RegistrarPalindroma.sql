CREATE PROCEDURE [dbo].[RegistrarPalindroma]
	@Palabra VARCHAR(200),
	@IsPalindroma BIT
AS
BEGIN
	INSERT INTO [dbo].[Palindroma] (Palabra, IsPalindroma) 
    VALUES (@Palabra, @IsPalindroma);
	SELECT SCOPE_IDENTITY();
END
