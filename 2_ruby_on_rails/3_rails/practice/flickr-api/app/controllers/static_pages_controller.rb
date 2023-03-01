class StaticPagesController < ApplicationController
  require "flickr"

  def index
    flickr = Flickr.new ENV["flickr_key"], ENV["flickr_secret"]
    user_id = params[:user_id]

    if !user_id.nil?
      begin
        @photos = flickr.people.getPublicPhotos(user_id: user_id)
      rescue Flickr::FailedResponse => e
      end
    end
  end
end
