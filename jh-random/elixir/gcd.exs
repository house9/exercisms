defmodule Greatest do
  # gcd(x,y) is 'x' if 'y' is 0
  # gcd(y, rem(x,y))

  def gcd(x,0) when x >= 0 do
    x
  end

  def gcd(x,y) when (x >= 0 and y > 0) do
    gcd(y, rem(x,y))
  end
end
