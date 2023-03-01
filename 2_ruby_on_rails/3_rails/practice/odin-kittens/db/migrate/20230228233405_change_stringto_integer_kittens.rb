class ChangeStringtoIntegerKittens < ActiveRecord::Migration[7.0]
  def change
    change_column :kittens, :softness, :integer
    change_column :kittens, :cuteness, :integer
  end
end
