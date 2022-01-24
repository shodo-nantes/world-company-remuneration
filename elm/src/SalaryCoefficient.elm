module SalaryCoefficient exposing (..)

type SalaryCoefficient = Percent Int

inPercent : SalaryCoefficient -> Int
inPercent s =
    case s of
        Percent y ->
            y
