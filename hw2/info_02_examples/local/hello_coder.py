from psychopy import visual,core,event
w=visual.Window(size=[800,600]) 
word=visual.TextStim(w,text='Hello, Coder!')
word.draw()
w.flip()
core.wait(2)
visual.TextStim(w,text='Press [y] or [n]!').draw()
w.flip()
print(event.waitKeys(keyList=['y','n']))