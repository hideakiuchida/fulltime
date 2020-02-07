CREATE TABLE [dbo].[ReciboEmpleado]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	[Nombre] VARCHAR(200) NOT NULL,
	[Antiguedad] INT NOT NULL,
	[ValorHora] DECIMAL(5,2) NULL,
	[TotalBruto] DECIMAL(7,2) NULL,
	[TotalDescuento] DECIMAL(7,2) NULL,
	[ValorNeto] DECIMAL(7,2) NULL
)
