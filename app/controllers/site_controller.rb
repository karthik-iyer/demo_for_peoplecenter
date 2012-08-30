class SiteController < ApplicationController
  
  def index
  end
  
  
  
  def create
    render "candidate/createaccount"
  end

  def edit
  
  end

  def loginaccount
    render "site/login"
  end

def xyz
  render "site/index"
end

  def show
    render "candidate/createaccount"
  end

end
