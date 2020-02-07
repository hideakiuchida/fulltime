CREATE PROCEDURE [dbo].[RegistrarReciboEmpleado]
	@Nombre VARCHAR(200) NOT NULL,
	@Antiguedad INT NOT NULL,
	@ValorHora DECIMAL(5,2) NULL,
	@TotalBruto DECIMAL(7,2) NULL,
	@TotalDescuento DECIMAL(7,2) NULL,
	@ValorNeto DECIMAL(7,2) NULL
AS
BEGIN
	INSERT INTO [dbo].[ReciboEmpleado] (Nombre, Antiguedad, ValorHora, TotalBruto, TotalDescuento, ValorNeto) 
    VALUES (@Nombre, @Antiguedad, @ValorHora, @TotalBruto, @TotalDescuento, @ValorNeto);
	SELECT SCOPE_IDENTITY();
END
